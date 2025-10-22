import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../../interfaces/IProductRequest";
import { ProductRepository } from "../../repository/ProductRepository";
import { CategoryRepository } from "../../repository/CategoryRepository";

class UpdateProductService {
    async execute({ id, name, EAN, price, description, categoryId }: IProductRequest & { id: string; categoryId: string }) {
        const productRepository = getCustomRepository(ProductRepository);
        const categoryRepository = getCustomRepository(CategoryRepository);

        const product = await productRepository.findOne(id);
        if (!product) {
            throw new Error("Produto não encontrado");
        }

        if (!name) {
            throw new Error("Nome está vázio");
        }

        // Regra de negócio: checar se o nome já existe em *outro* produto
        if (name && name !== product.name) {
            const productNameExists = await productRepository.findOne({ name });
            if (productNameExists) {
                throw new Error("Este nome de produto já está em uso");
            }
        }

        // Validação: verificar se a nova categoria existe
        if (categoryId && categoryId !== product.categoryId) {
             const category = await categoryRepository.findOne(categoryId);
             if (!category) {
                throw new Error("Categoria não encontrada");
             }
        }
        
        productRepository.merge(product, {
            name,
            EAN,
            price,
            description,
            categoryId,
            update_at: new Date()
        });

        await productRepository.save(product);
        return product;
    }
}

export { UpdateProductService };