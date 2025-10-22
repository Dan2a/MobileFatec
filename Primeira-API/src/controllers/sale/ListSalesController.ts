import { Request, Response } from "express";
import { ListSaleService } from "../../services/sale/ListSaleService";

export class ListSalesController {
    async handle(request: Request, response: Response) {
        const listSaleService = new ListSaleService();
        const sales = await listSaleService.execute();
        return response.json(sales);
    }
}