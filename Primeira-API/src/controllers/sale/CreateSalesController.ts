import { Request, Response } from "express";
import { CreateSaleService } from "../../services/sale/CreateSaleService";

export class CreateSalesController {
    async handle(request: Request, response: Response) {
        const createSaleService = new CreateSaleService();

        const { value, discount, productId, clientId } = request.body;
        const sale = { value, discount, productId, clientId };

        const resp = await createSaleService.execute(sale);

        response.json({ message: "Venda registrada com Sucesso", data: resp });
    }
}
