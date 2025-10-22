import {Request, Response} from 'express';

class DeleteClientController {
    handle(request: Request, response: Response) {
        const id = request.params;
        console.log(id);
        return response.json({ message: "Cliente deletado com sucesso" });
    }
}
export { DeleteClientController };