import { Request, Response } from 'express';
import { UpdateCategoryService } from '../../services/category/UpdateCategoryService'; 

class UpdateCategoryController{
    async handle(request: Request, response: Response){
        const { id } = request.params;
        const { name, description } = request.body;
        
        const updateCategoryService = new UpdateCategoryService();
        
        const category = await updateCategoryService.execute({ id, name, description });

        return response.json(category);
    }
}
export { UpdateCategoryController };