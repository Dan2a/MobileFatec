import { Request, Response } from "express";
import { CreateClientService } from "../../services/client/CreateClientService";
class CreateClientController {
    async handle(request: Request, response: Response) {
        const createClientService = new CreateClientService();
        const { name, cpf, email, address, zipcode, number, city, state } = request.body;
        const client = {
            name: name,
            cpf: cpf,
            email: email,
            address: address,
            zipcode: zipcode,
            number: number,
            city: city,
            state: state,
        };

        const resp = await createClientService.execute(client);
        response.json({ message: "Registro incluido com Sucesso", data: resp });
    }
}
export { CreateClientController };
