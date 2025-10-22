import { Request, Response } from "express";
import { UpdateClientService } from "../../services/client/UpdateClientService";

class UpdateClientController {
    handle(request: Request, response: Response) {
        const updateClientService = new UpdateClientService();
        const id = request.params.id || "";

        if (!id) {
            response.json({ message: "Id está vazio" });
        }

        const { name, cpf, email, address, zipcode, number, city, state } = request.body;

        const novoCliente = { name, cpf, email, address, zipcode, number, city, state };

        updateClientService.execute(id, novoCliente);
        response.json({ message: "Registro atualizado com Sucesso", id, novoCliente });
    }
}
export { UpdateClientController };
