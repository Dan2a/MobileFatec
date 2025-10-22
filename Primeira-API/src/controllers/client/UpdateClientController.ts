import { Request, Response } from "express";
import { UpdateClientService } from "../../services/client/UpdateClientService";

class UpdateClientController {
    async handle(request: Request, response: Response) {
        const updateClientService = new UpdateClientService();
        const { id } = request.params;
        const { name, cpf, email, address, zipcode, number, city, state } = request.body;

        const client = await updateClientService.execute(id, { 
            name, cpf, email, address, zipcode, number, city, state 
        });
        
        return response.json(client);
    }
}
export { UpdateClientController };