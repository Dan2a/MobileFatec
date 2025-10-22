import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";
import { UsersRepostories } from "../../repository/UserRepository";
import { getCustomRepository } from "typeorm";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const updateUserService = new UpdateUserService();
        const usersRepository = getCustomRepository(UsersRepostories);

        const { id } = request.params;
        const { name, email, admin, password } = request.body;

        try {
            const updateResult = await updateUserService.execute({ id, name, email, admin, password });

            if (updateResult.affected === 0) {
                return response.status(404).json({ message: "Usuário não encontrado para atualização." });
            }

            const updatedUser = await usersRepository.findOne(id);
            if (!updatedUser) {
                 // Caso raro, mas trata se o usuário for deletado entre o update e o findOne
                 return response.status(404).json({ message: "Usuário não encontrado após atualização." });
            }

            const { password: _, ...userWithoutPassword } = updatedUser;

            return response.json(userWithoutPassword);

        } catch (error) {
            throw error;
        }
    }
}

export { UpdateUserController };