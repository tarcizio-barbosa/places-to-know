import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../dtos/ICreateUserDto";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async createUser({ userEmail, userPassword }: ICreateUserDTO): Promise<User> {
    const newUser = this.repository.create({
      userEmail,
      userPassword,
    });

    await this.repository.save(newUser);

    return newUser;
  }

  async findUserByEmail(userEmail: string): Promise<User | undefined> {
    return this.repository.findOne({ userEmail });
  }

  async findById(userId: string): Promise<User | undefined> {
    return this.repository.findOne({ id: userId });
  }
}
