import { Request, Response } from "express";
import { UpdateSaleService } from "../../services/sale/UpdateSaleService";

class UpdateSalesController {
    async handle(request: Request, response: Response) {
        const updateSaleService = new UpdateSaleService();

        const id = request.params.id || "";
        if (!id) {
            throw Error("Dados incorretos");
        }

        const { value, discount, productId, clientId } = request.body;

        const sale = { id, value, discount, productId, clientId };

        const resp = await updateSaleService.execute(sale);

        response.json({ message: `Venda com ID ${id} atualizada com sucesso`, data: resp });
    }
}
export { UpdateSalesController };
