import { Request, Response } from "express";
import { DeleteSaleService } from "../../services/sale/DeleteSaleService";

export class DeleteSalesController {
    async handle(request: Request, response: Response) {
        const deleteSaleService = new DeleteSaleService();
        const { id } = request.params;

        const resp = await deleteSaleService.execute(id);

        return response.json(resp);
    }
}