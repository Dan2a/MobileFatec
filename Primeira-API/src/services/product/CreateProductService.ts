import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../../interfaces/IProductRequest";
import { ProductRepository } from "../../repository/ProductRepository";
import { CategoryRepository } from "../../repository/CategoryRepository";

export class CreateProductService {
    async execute({ name, EAN, price, description, categoryId }: Omit<IProductRequest, 'id'> & { categoryId: string }) {
        const productRepository = getCustomRepository(ProductRepository);
        const categoryRepository = getCustomRepository(CategoryRepository);

        if (!name || !price || !categoryId) {
            throw new Error("Nome, Preço e ID da Categoria são obrigatórios");
        }

        // Regra de negócio: não pode haver dois produtos com mesmo nome
        const productAlreadyExists = await productRepository.findOne({ name });
        if (productAlreadyExists) {
            throw new Error("Produto já cadastrado");
        }

        // Validação: verificar se a categoria existe
        const category = await categoryRepository.findOne(categoryId);
        if (!category) {
            throw new Error("Categoria não encontrada");
        }

        const product = productRepository.create({
            name,
            EAN,
            price,
            description,
            categoryId,
        });

        await productRepository.save(product);
        return product;
    }
}