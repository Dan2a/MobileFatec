import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../../repository/ProductRepository";

export class ListProductService {
    async execute() {
        const productRepository = getCustomRepository(ProductRepository);
        // Usar 'relations' para trazer os dados da categoria junto (JOIN)
        const products = await productRepository.find({
            relations: ["category"]
        });
        return products;
    }
}