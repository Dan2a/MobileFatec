import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const deleteCategoryService = new DeleteCategoryService();
        const { id } = request.params;

        const result = await deleteCategoryService.execute(id);
        
        return response.json(result);
    }
}
export { DeleteCategoryController };