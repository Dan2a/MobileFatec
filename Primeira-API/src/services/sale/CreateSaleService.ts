import { getCustomRepository } from "typeorm";
import { ISaleRequest } from "../../interfaces/ISaleRequest";
import { SaleRepository } from "../../repository/SaleRepository";
import { ProductRepository } from "../../repository/ProductRepository";
import { ClientRepository } from "../../repository/ClientRepository";

export class CreateSaleService {
    async execute({ value, discount, productId, clientId }: Omit<ISaleRequest, 'id'> & { productId: string; clientId: string }) {
        const saleRepository = getCustomRepository(SaleRepository);
        const productRepository = getCustomRepository(ProductRepository);
        const clientRepository = getCustomRepository(ClientRepository);

        if (value < 0 || !productId || !clientId) {
            throw new Error("Dados incorretos (Valor, ID do Produto e ID do Cliente são obrigatórios)");
        }

        // Validação: Checar se produto e cliente existem
        const product = await productRepository.findOne(productId);
        if (!product) {
            throw new Error("Produto não encontrado");
        }
        const client = await clientRepository.findOne(clientId);
        if (!client) {
            throw new Error("Cliente não encontrado");
        }

        const sale = saleRepository.create({
            value,
            discount,
            productId,
            clientId
        });

        await saleRepository.save(sale);
        return sale;
    }
}