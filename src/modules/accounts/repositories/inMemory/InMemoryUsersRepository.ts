import { ICreateUserDTO } from "../../dtos/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class InMemoryUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async createUser({ userEmail, userPassword }: ICreateUserDTO): Promise<User> {
    const newUser = new User();

    Object.assign(newUser, { userEmail, userPassword });

    this.users.push(newUser);

    return newUser;
  }

  async findUserByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.userEmail === email);
  }
}
