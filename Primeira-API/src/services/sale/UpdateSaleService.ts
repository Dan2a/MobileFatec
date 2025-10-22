import { ISaleRequest } from "../../interfaces/ISaleRequest";

export class UpdateSaleService {
    async execute({ id, value, discount, productId, clientId }: ISaleRequest) {
        if (value < 0) {
            throw new Error("Dados incorretos");
        }

        var vsale = { id, value, discount, productId, clientId };

        return vsale;
    }
}
