import {Request, Response} from 'express';
import { DeleteClientService } from '../../services/client/DeleteClientService'; // Importar

class DeleteClientController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const deleteClientService = new DeleteClientService();
        
        const result = await deleteClientService.execute(id);
        
        return response.json(result);
    }
}
export { DeleteClientController };