import { Request, Response } from "express";
import { CreateSaleService } from "../../services/sale/CreateSaleService";

export class CreateSalesController {
    async handle(request: Request, response: Response) {
        const createSaleService = new CreateSaleService();
        const { value, discount, productId, clientId } = request.body;

        const sale = await createSaleService.execute({ 
            value, discount, 
            productId: String(productId), 
            clientId: String(clientId) 
        });

        return response.status(201).json(sale);
    }
}