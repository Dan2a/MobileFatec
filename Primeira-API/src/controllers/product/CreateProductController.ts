import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const createProductService = new CreateProductService();
        const { name, EAN, price, description, categoryId } = request.body;

        // Garantir que categoryId seja string
        const product = await createProductService.execute({ name, EAN, price, description, categoryId: String(categoryId) });

        return response.status(201).json(product);
    }
}
export { CreateProductController };