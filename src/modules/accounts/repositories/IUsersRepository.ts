import { ICreateUserDTO } from "../dtos/ICreateUserDto";
import { User } from "../entities/User";

export interface IUsersRepository {
  createUser(data: ICreateUserDTO): Promise<User>;
  findUserByEmail(email: string): Promise<User>;
}
