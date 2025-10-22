import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const createCategoryService = new CreateCategoryService();
        const { name, description } = request.body;

        const category = await createCategoryService.execute({ name, description });

        return response.status(201).json(category);
    }
}
export { CreateCategoryController };