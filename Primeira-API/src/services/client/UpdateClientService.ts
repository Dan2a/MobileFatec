import { IClientRequest } from "../../interfaces/IClientRequest";

class UpdateClientService {
    async execute(
        id: string,
        { name, cpf, email, address, zipcode, number, city, state }: IClientRequest
    ) {
        if (!name) {
            throw new Error("Nome está vázio");
        }

        var vclient = {
            id: id,
            name: name,
            cpf: cpf,
            email: email,
            address: address,
            zipcode: zipcode,
            number: number,
            city: city,
            state: state,
        };

        return vclient;
    }
}

export { UpdateClientService };
