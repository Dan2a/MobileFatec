import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../interfaces/IClientRequest";
import { ClientRepository } from "../../repository/ClientRepository";

export class CreateClientService {
    async execute(data: IClientRequest) {
        const clientRepository = getCustomRepository(ClientRepository);
        
        if (!data.email || !data.cpf || !data.name) {
            throw new Error("Email, CPF e Nome são obrigatórios");
        }

        // Regra de negócio: não pode haver dois clientes com mesmo documento (cpf)
        const clientAlreadyExists = await clientRepository.findOne({ cpf: data.cpf });
        if (clientAlreadyExists) {
            throw new Error("Cliente (CPF) já cadastrado");
        }

        const client = clientRepository.create({
            ...data,
            zipcode: String(data.zipcode)
        });

        await clientRepository.save(client);
        return client;
    }
}