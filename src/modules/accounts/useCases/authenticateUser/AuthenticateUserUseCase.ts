import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import authConfig from "../../../../config/authConfig";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AuthenticateUserError } from "./AuthenticateUserError";

interface IRequest {
  userEmail: string;
  userPassword: string;
}

interface IResponse {
  token: string;
  user: Pick<User, "id" | "userEmail">;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ userEmail, userPassword }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findUserByEmail(userEmail);

    if (!user) {
      throw new AuthenticateUserError();
    }

    const passwordMatch = await compare(userPassword, user.userPassword);

    if (!passwordMatch) {
      throw new AuthenticateUserError();
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ user }, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user: {
        id: user.id,
        userEmail: user.userEmail,
      },
      token,
    };
  }
}
