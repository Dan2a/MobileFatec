import { ISaleRequest } from "../../interfaces/ISaleRequest";

export class CreateSaleService {
    async execute({ value, discount, productId, clientId }: ISaleRequest) {
        if (value < 0) {
            throw new Error("Dados incorretos");
        }

        const vSale = { value, discount, productId, clientId };

        return vSale;
    }
}
