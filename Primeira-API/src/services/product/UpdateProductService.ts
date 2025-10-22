import { IProductRequest } from "../../interfaces/IProductRequest";

class UpdateProductService {
    async execute({ name, EAN, price, description, categoryId }: IProductRequest) {
        if (!name) {
            throw new Error("Nome está vázio");
        }

        var vproduct = { name, EAN, price, description, categoryId };

        return vproduct;
    }
}

export { UpdateProductService };
