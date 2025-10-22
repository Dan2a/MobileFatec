import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";

class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const deleteCategoryService = new DeleteCategoryService();
        const id = request.params;

        deleteCategoryService.execute(id);
        response.json({ message: `Registro ${id} excluído com Sucesso` });
    }
}
export { DeleteCategoryController };
