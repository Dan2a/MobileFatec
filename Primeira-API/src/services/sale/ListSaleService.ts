export class ListSaleService {
    async execute() {
        const sales = [
            {
                id: 1,
                value: 100,
                discount: 10,
                productId: 1,
                ClientId: 1,
            },
            {
                id: 2,
                value: 200,
                discount: 5,
                productId: 2,
                ClientId: 3,
            },
        ];
        return sales;
    }
}
