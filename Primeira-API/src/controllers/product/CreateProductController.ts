import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const createProductService = new CreateProductService();

        const { name, EAN, price, description, categoryId } = request.body;

        const product = { name, EAN, price, description, categoryId };

        const resp = await createProductService.execute(product);

        response.json({ message: "Registro incluido com Sucesso", data: resp });
    }
}

export { CreateProductController };
