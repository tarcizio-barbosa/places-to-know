import { InMemoryUsersRepository } from "../../../accounts/repositories/inMemory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../../../accounts/useCases/createUser/CreateUserUseCase";
import { InMemoryPlacesRepository } from "../../repositories/inMemory/InMemoryPlacesRepository";
import { CreatePlaceUseCase } from "./CreatePlaceUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;
let inMemoryPlacesRepository: InMemoryPlacesRepository;
let createPlaceUseCase: CreatePlaceUseCase;

describe("Create Place", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryPlacesRepository = new InMemoryPlacesRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    createPlaceUseCase = new CreatePlaceUseCase(inMemoryPlacesRepository);
  });

  it("Should be able to create a new Place", async () => {
    const user = await createUserUseCase.execute({
      userEmail: "tarcizio@io.com.br",
      userPassword: "k9sonwow11",
    });

    const newPlace = await createPlaceUseCase.execute({
      placeName: "São Paulo",
      userId: user.id,
    });

    expect(newPlace).toHaveProperty("id");
  });
});
