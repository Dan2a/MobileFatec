import { ICategoryRequest } from "../../interfaces/ICategoryRequest";

export class CreateCategoryService {
    async execute({ name, description }: ICategoryRequest) {
        if (!name) {
            throw new Error("Nome incorreto");
        }

        var vcategory = {
            name: name,
            description: description,
        };

        return vcategory;
    }
}
