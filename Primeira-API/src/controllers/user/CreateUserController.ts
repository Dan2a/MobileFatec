import { Response, Request } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const createUserService = new CreateUserService();

        const { name, email, admin, password } = request.body;

        const resp = await createUserService.execute({
            name,
            email,
            admin,
            password,
        });

        return response.json(resp);
    }
}
