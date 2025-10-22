import { getCustomRepository } from "typeorm";
import { ICategoryRequest } from "../../interfaces/ICategoryRequest";
import { CategoryRepository } from "../../repository/CategoryRepository";

class UpdateCategoryService {
    async execute({ id, name, description }: ICategoryRequest) {
        const categoryRepository = getCustomRepository(CategoryRepository);

        const category = await categoryRepository.findOne(id);
        if (!category) {
            throw new Error("Categoria não encontrada");
        }

        if (!name) {
            throw new Error("Nome está vázio");
        }

        // Regra de negócio: checar se o nome já existe em *outra* categoria
        if (name && name !== category.name) {
            const categoryNameExists = await categoryRepository.findOne({ name });
            if (categoryNameExists) {
                throw new Error("Este nome de categoria já está em uso");
            }
        }

        category.name = name;
        category.description = description;
        category.update_at = new Date();

        await categoryRepository.save(category);
        return category;
    }
}

export { UpdateCategoryService };