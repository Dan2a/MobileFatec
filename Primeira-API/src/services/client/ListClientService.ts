import { getCustomRepository } from "typeorm";
import { ClientRepository } from "../../repository/ClientRepository";

class ListClientService {
    async execute() {
        const clientRepository = getCustomRepository(ClientRepository);
        const clients = await clientRepository.find();
        return clients;
    }
}
export { ListClientService };