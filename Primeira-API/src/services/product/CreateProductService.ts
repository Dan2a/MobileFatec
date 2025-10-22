import { IProductRequest } from "../../interfaces/IProductRequest";

export class CreateProductService {
    async execute({ name, EAN, price, description, categoryId }: IProductRequest) {
        if (!name) {
            throw new Error("Dados incorretos");
        }

        const vProduct = { name, EAN, price, description, categoryId };

        return vProduct;
    }
}
