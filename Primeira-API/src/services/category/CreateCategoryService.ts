import { getCustomRepository } from "typeorm";
import { ICategoryRequest } from "../../interfaces/ICategoryRequest";
import { CategoryRepository } from "../../repository/CategoryRepository";

export class CreateCategoryService {
    async execute({ name, description }: ICategoryRequest) {
        const categoryRepository = getCustomRepository(CategoryRepository);

        if (!name) {
            throw new Error("Nome incorreto");
        }

        // Regra de negócio: não pode haver duas categorias com mesmo nome
        const categoryAlreadyExists = await categoryRepository.findOne({ name });
        if (categoryAlreadyExists) {
            throw new Error("Categoria já cadastrada");
        }

        const category = categoryRepository.create({
            name,
            description,
        });

        await categoryRepository.save(category);
        return category;
    }
}