import { validate } from "uuid";

import { InMemoryUsersRepository } from "../../repositories/inMemory/InMemoryUsersRepository";
import { CreateUserError } from "./CreateUserError";
import { CreateUserUseCase } from "./CreateUserUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create User Use Case", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it("Should be able to create a new User", async () => {
    const user = await createUserUseCase.execute({
      userEmail: "tarcizio@io.com.br",
      userPassword: "k9sonwow11",
    });

    expect(user).toHaveProperty("id");
    expect(user.userPassword.length).toEqual(60);
    expect(validate(user.id as string)).toBeTruthy();
  });

  it("Should not be able to create a new User with the same e-mail", () => {
    expect(async () => {
      await createUserUseCase.execute({
        userEmail: "tarcizio@io.com.br",
        userPassword: "k9sonwow11",
      });

      await createUserUseCase.execute({
        userEmail: "tarcizio@io.com.br",
        userPassword: "k9sonwow11",
      });
    }).rejects.toBeInstanceOf(CreateUserError);
  });
});
