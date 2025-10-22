import { getCustomRepository } from "typeorm";
import { SaleRepository } from "../../repository/SaleRepository";

export class ListSaleService {
    async execute() {
        const saleRepository = getCustomRepository(SaleRepository);
        // Usar 'relations' para trazer os dados do cliente e produto (JOIN)
        const sales = await saleRepository.find({
            relations: ["product", "client"]
        });
        return sales;
    }
}