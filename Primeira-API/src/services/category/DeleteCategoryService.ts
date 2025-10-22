import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repository/CategoryRepository";

class DeleteCategoryService {
    async execute(id: string) {
        const categoryRepository = getCustomRepository(CategoryRepository);
        const category = await categoryRepository.findOne(id);

        if (!category) {
            throw new Error("Categoria não encontrada");
        }

        await categoryRepository.delete(id);
        return { message: "Registro excluido com sucesso" };
    }
}

export { DeleteCategoryService };