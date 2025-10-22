export class ListProductService {
    async execute() {
        const products = [
            {
                id: 1,
                name: "Produto 1",
                EAN: "1234567890123",
                price: 10.0,
                description: "Descrição do Produto 1",
                categoryId: 1,
            },
            {
                id: 2,
                name: "Produto 2",
                EAN: "1234567890124",
                price: 20.0,
                description: "Descrição do Produto 2",
                categoryId: 2,
            },
        ];
        return products;
    }
}
