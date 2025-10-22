import { getCustomRepository } from "typeorm";
import { IUserRequest } from "../../interfaces/IUserRequest";
import { UsersRepostories } from "../../repository/UserRepository";
import { hash } from "bcryptjs";

class UpdateUserService {
    async execute({ id, name, email, admin = false, password }: IUserRequest) {
        const usersRepostories = getCustomRepository(UsersRepostories);
        if (!email) {
            throw new Error("Email incorreto");
        }

        const userAlreadyExists = await usersRepostories.findOne(id);

        if (!userAlreadyExists) {
            throw new Error("User not exists");
        }

        const passwordHash = await hash(password, 8);

        userAlreadyExists.name = name;
        userAlreadyExists.email = email;
        userAlreadyExists.admin = admin;
        userAlreadyExists.update_at = new Date();
        userAlreadyExists.password = passwordHash;

        return await usersRepostories.update(id, userAlreadyExists);
    }
}

export { UpdateUserService };
