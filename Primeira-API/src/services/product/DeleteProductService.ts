import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../../repository/ProductRepository";

export class DeleteProductService {
    async execute(id: string) {
        const productRepository = getCustomRepository(ProductRepository);
        const product = await productRepository.findOne(id);

        if (!product) {
            throw new Error("Produto não encontrado");
        }

        await productRepository.delete(id);
        return { message: "Registro excluido com sucesso" };
    }
}