import { ICreateUserDTO } from "../dtos/ICreateUserDto";
import { User } from "../entities/User";

export interface IUsersRepository {
  createUser(data: ICreateUserDTO): Promise<User>;
  findUserByEmail(userEmail: string): Promise<User | undefined>;
  findById(userId: string): Promise<User | undefined>;
}
