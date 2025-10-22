import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product/UpdateProductService";

class UpdateProductController {
    async handle(request: Request, response: Response) {
        const updateProductService = new UpdateProductService();
        const id = request.params.id || "";

        if (!id) {
            throw new Error("ID inválido");
        }

        const { name, EAN, price, description, categoryId } = request.body;

        const product = { id, name, EAN, price, description, categoryId };

        const resp = updateProductService.execute(product);

        response.json({ message: "Registro atualizado com Sucesso", resp });
    }
}
export { UpdateProductController };
