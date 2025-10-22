import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product/UpdateProductService";

class UpdateProductController {
    async handle(request: Request, response: Response) {
        const updateProductService = new UpdateProductService();
        const { id } = request.params;
        const { name, EAN, price, description, categoryId } = request.body;

        const product = await updateProductService.execute({ 
            id, name, EAN, price, description, categoryId: String(categoryId) 
        });

        return response.json(product);
    }
}
export { UpdateProductController };