import { ICreateUserDTO } from "../../dtos/ICreateUserDto";
import { InMemoryUsersRepository } from "../../repositories/inMemory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      inMemoryUsersRepository
    );
  });

  it("Should be able to authenticate a User", async () => {
    const newUser: ICreateUserDTO = {
      userEmail: "tarcizio@io.com.br",
      userPassword: "k9sonwow11",
    };

    await createUserUseCase.execute(newUser);

    const userAuthenticated = await authenticateUserUseCase.execute({
      userEmail: newUser.userEmail,
      userPassword: newUser.userPassword,
    });

    expect(userAuthenticated).toHaveProperty("token");
  });
});
