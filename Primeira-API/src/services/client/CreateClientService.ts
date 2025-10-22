import { IClientRequest } from "../../interfaces/IClientRequest";

export class CreateClientService {
    async execute({ name, cpf, email, address, zipcode, number, city, state }: IClientRequest) {
        if (!email) {
            throw new Error("Email incorreto");
        }

        const vclient = {
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
