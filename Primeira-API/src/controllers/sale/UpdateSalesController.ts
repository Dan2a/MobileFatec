import { Request, Response } from "express";
import { UpdateSaleService } from "../../services/sale/UpdateSaleService";

class UpdateSalesController {
    async handle(request: Request, response: Response) {
        const updateSaleService = new UpdateSaleService();
        const { id } = request.params;
        const { value, discount, productId, clientId } = request.body;

        const sale = await updateSaleService.execute({ 
            id, value, discount, 
            productId: String(productId), 
            clientId: String(clientId) 
        });

        return response.json(sale);
    }
}
export { UpdateSalesController };