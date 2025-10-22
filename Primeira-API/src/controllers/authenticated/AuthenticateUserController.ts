import { Request, Response } from "express";
import { AuthenticateUserService } from "../../services/authenticated/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticatedUserService = new AuthenticateUserService();

        const token = await authenticatedUserService.execute({
            email: email,
            password: password,
        });

        return response.json(token);
    }
}

export { AuthenticateUserController };
