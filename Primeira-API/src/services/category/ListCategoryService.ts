import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repository/CategoryRepository";

class ListCategoryService {
    async execute() {
        const categoryRepository = getCustomRepository(CategoryRepository);
        const categories = await categoryRepository.find();
        return categories;
    }
}
export { ListCategoryService };