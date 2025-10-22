import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const createCategoryService = new CreateCategoryService();
        const { name, description } = request.body;

        const category = {
            name: name,
            description: description,
        };

        createCategoryService.execute(category);

        response.json({ message: "Registro incluido com Sucesso" });
    }
}
export { CreateCategoryController };
