import { hash } from "bcryptjs";

import { ICreateUserDTO } from "../../dtos/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserError } from "./CreateUserError";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute({ userEmail, userPassword }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findUserByEmail(
      userEmail
    );

    if (userAlreadyExists) {
      throw new CreateUserError();
    }

    const passwordHashed = await hash(userPassword, 8);

    const newUser = await this.usersRepository.createUser({
      userEmail,
      userPassword: passwordHashed,
    });

    return newUser;
  }
}
