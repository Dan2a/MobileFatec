import {Request, Response} from 'express';

class UpdateCategoryController{
    async handle(request: Request, response: Response){
        const id = request.params;
        const {name, description} = request.body;
        const category ={
            id: id,
            name: name,
            description: description
        }
        response.json({message: `Registro ${id} alterado com Sucesso`});
    }
}
export {UpdateCategoryController};