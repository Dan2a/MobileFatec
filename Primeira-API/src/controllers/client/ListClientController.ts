import { Request, Response } from 'express';
import { ListClientService } from '../../services/client/ListClientService'; // Importar o Serviço

class ListClientController {
    async handle(request: Request, response: Response) {
        const listClientService = new ListClientService();
        const clients = await listClientService.execute();
        return response.json(clients);
    }
}
export { ListClientController };