import { getCustomRepository } from "typeorm";
import { SaleRepository } from "../../repository/SaleRepository";

export class DeleteSaleService {
    async execute(id: string) {
        const saleRepository = getCustomRepository(SaleRepository);
        const sale = await saleRepository.findOne(id);

        if (!sale) {
            throw new Error("Venda não encontrada");
        }

        await saleRepository.delete(id);
        return { message: "Registro excluido com sucesso" };
    }
}