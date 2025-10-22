import { getCustomRepository } from "typeorm";
import { UsersRepostories } from "../../repository/UserRepository";

class ListUserService {
    async execute() {
        const usersRepostories = getCustomRepository(UsersRepostories);

        const users = await usersRepostories.find();

        return users;
    }
}
export { ListUserService };
