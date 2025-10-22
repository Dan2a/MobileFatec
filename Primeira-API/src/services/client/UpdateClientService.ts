import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../interfaces/IClientRequest";
import { ClientRepository } from "../../repository/ClientRepository";

class UpdateClientService {
    async execute(id: string, data: IClientRequest) {
        const clientRepository = getCustomRepository(ClientRepository);
        
        const client = await clientRepository.findOne(id);
        if (!client) {
            throw new Error("Cliente não encontrado");
        }

        if (!data.name) {
            throw new Error("Nome está vázio");
        }

        // Regra de negócio: checar se o CPF já existe em *outro* cliente
        if (data.cpf && data.cpf !== client.cpf) {
            const clientCpfExists = await clientRepository.findOne({ cpf: data.cpf });
            if (clientCpfExists) {
                throw new Error("Este CPF já está em uso por outro cliente");
            }
        }

        // Atualiza o objeto 'client' com os novos dados
        clientRepository.merge(client, {
            ...data,
            zipcode: String(data.zipcode),
            update_at: new Date()
        });

        await clientRepository.save(client);
        return client;
    }
}

export { UpdateClientService };