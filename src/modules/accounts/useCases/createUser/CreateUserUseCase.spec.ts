import { validate } from "uuid";

import { InMemoryUsersRepository } from "../../repositories/inMemory/InMemoryUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create User", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it("Should be able to create a new User", async () => {
    const user = await createUserUseCase.execute({
      userEmail: "tarcizio@io.com.br",
      userPassword: "k9sonwow11",
    });

    expect(user).toHaveProperty("userId");
    expect(user.userPassword.length).toEqual(60);
    expect(validate(user.userId as string)).toBeTruthy();
  });
});
