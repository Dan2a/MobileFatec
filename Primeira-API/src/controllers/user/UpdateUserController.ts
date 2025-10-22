import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(request: Request, response: Response) {
        const updateUserService = new UpdateUserService();

        const id = request.params.id;
        const { name, email, admin, password } = request.body;

        updateUserService.execute({ id, name, email, admin, password });
        response.json({
            message: "Registro atualizado com Sucesso",
            id,
            name,
            email,
            admin,
            password,
        });
    }
}

export { UpdateUserController };
