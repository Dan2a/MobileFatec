import { getCustomRepository } from "typeorm";
import { UsersRepostories } from "../../repository/UserRepository";

export class DeleteUserService {
    async execute(id: any) {
        const usersRepostories = getCustomRepository(UsersRepostories);

        const userAlreadyExists = await usersRepostories.findOne(id);

        if (!userAlreadyExists) {
            throw new Error("Usuário não encontrado.");
        }
        await usersRepostories.delete(id);
    
        return { message: "Usuário deletado com sucesso." };
    }
}
