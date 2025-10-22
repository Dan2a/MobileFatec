import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepostories } from "../../repository/UserRepository";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepostories = getCustomRepository(UsersRepostories);
        const user = await usersRepostories.findOne({ email });

        if (!user) {
            throw new Error("Password incorreto");
        }

        const passwordMatch = await compare(password, user?.password); // hash for '123456'

        if (!passwordMatch) {
            throw new Error("Password incorrect");
        }

        const token = sign({ email: user.email }, "123456", {
            subject: user.admin ? "Admin" : "others",
            expiresIn: "1d",
        });
        return token;
    }
}

export { AuthenticateUserService };
