import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";

export class DeleteProductController {
    async handle(request: Request, response: Response) {
        const deleteProductService = new DeleteProductService();
        const { id } = request.params;
        
        const resp = await deleteProductService.execute(id);

        return response.json(resp);
    }
}