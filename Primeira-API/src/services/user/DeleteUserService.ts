import { getCustomRepository } from "typeorm";
import { UsersRepostories } from "../../repository/UserRepository";

export class DeleteUserService {
    async execute(id: any) {
        const usersRepostories = getCustomRepository(UsersRepostories);

        const userAlreadyExists = usersRepostories.findOne(id);

        if (!userAlreadyExists) {
            throw new Error("User not exists");
        }
        return await usersRepostories.delete(id);
    }
}
