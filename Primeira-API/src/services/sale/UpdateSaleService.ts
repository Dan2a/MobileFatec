import { getCustomRepository } from "typeorm";
import { ISaleRequest } from "../../interfaces/ISaleRequest";
import { SaleRepository } from "../../repository/SaleRepository";
import { ProductRepository } from "../../repository/ProductRepository";
import { ClientRepository } from "../../repository/ClientRepository";

export class UpdateSaleService {
    async execute({ id, value, discount, productId, clientId }: ISaleRequest & { id: string; productId: string; clientId: string }) {
        const saleRepository = getCustomRepository(SaleRepository);
        const productRepository = getCustomRepository(ProductRepository);
        const clientRepository = getCustomRepository(ClientRepository);

        const sale = await saleRepository.findOne(id);
        if (!sale) {
            throw new Error("Venda não encontrada");
        }

        if (value < 0) {
            throw new Error("Dados incorretos");
        }

        // Validação: Checar se produto e cliente existem (se forem alterados)
        if (productId && productId !== sale.productId) {
            const product = await productRepository.findOne(productId);
            if (!product) {
                throw new Error("Produto não encontrado");
            }
        }
        if (clientId && clientId !== sale.clientId) {
            const client = await clientRepository.findOne(clientId);
            if (!client) {
                throw new Error("Cliente não encontrado");
            }
        }

        saleRepository.merge(sale, {
            value,
            discount,
            productId,
            clientId,
            update_at: new Date()
        });
        
        await saleRepository.save(sale);
        return sale;
    }
}