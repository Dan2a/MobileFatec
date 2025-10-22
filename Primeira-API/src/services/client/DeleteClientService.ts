import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../../repository/ClientRepository";

export class DeleteClientService {
    async execute(id: string) {
        const clientRepository = getCustomRepository(ClientRepository);
        const client = await clientRepository.findOne(id);

        if (!client) {
            throw new Error("Cliente não encontrado");
        }

        await clientRepository.delete(id);
        return { message: "Registro excluido com sucesso" };
    }
}