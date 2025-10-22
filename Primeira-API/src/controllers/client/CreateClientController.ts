import { Request, Response } from "express";
import { CreateClientService } from "../../services/client/CreateClientService";

class CreateClientController {
    async handle(request: Request, response: Response) {
        const createClientService = new CreateClientService();
        const { name, cpf, email, address, zipcode, number, city, state } = request.body;
        
        const client = await createClientService.execute({
            name, cpf, email, address, zipcode, number, city, state
        });
        
        return response.status(201).json(client);
    }
}
export { CreateClientController };