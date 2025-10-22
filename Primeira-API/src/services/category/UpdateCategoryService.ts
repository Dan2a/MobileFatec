import { ICategoryRequest } from "../../interfaces/ICategoryRequest";

class UpdateCategoryService {
    async execute({ id, name, description }: ICategoryRequest) {
        if (!name) {
            throw new Error("Nome está vázio");
        }

        var vcategory = {
            id: id,
            name: name,
            description: description,
        };

        return vcategory;
    }
}

export { UpdateCategoryService };
