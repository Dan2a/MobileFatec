import { IUserRequest } from "../../interfaces/IUserRequest";
import { hash } from "bcryptjs";
import { UsersRepostories } from "../../repository/UserRepository";
import { getCustomRepository } from "typeorm";

class CreateUserService {
    async execute({ name, email, admin = false, password }: IUserRequest) {
        if (!email) {
            throw new Error("Email incorreto");
        }

        const usersRepostories = getCustomRepository(UsersRepostories);

        const userAlreadyExists = await usersRepostories.findOne({ email });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepostories.create({ name, email, admin, password: passwordHash });

        await usersRepostories.save(user);

        return user;
    }
}

export { CreateUserService };
