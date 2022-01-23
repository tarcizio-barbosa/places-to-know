import { InMemoryUsersRepository } from "../../../accounts/repositories/inMemory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../../../accounts/useCases/createUser/CreateUserUseCase";
import { InMemoryPlacesRepository } from "../../repositories/inMemory/InMemoryPlacesRepository";
import { CreatePlaceUseCase } from "../createPlace/CreatePlaceUseCase";
import { GetPlacesUseCase } from "./GetPlacesUseCase";

let inMemoryPlacesRepository: InMemoryPlacesRepository;
let inMemoryUsersRepository: InMemoryUsersRepository;
let createPlaceUseCase: CreatePlaceUseCase;
let createUserUseCase: CreateUserUseCase;
let getPlacesUseCase: GetPlacesUseCase;

describe("Get All Places", () => {
  beforeEach(() => {
    inMemoryPlacesRepository = new InMemoryPlacesRepository();
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createPlaceUseCase = new CreatePlaceUseCase(inMemoryPlacesRepository);
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    getPlacesUseCase = new GetPlacesUseCase(inMemoryPlacesRepository);
  });

  it("Should be able to get all Places", async () => {
    const newUser = await createUserUseCase.execute({
      userEmail: "tarcizio@io.com.br",
      userPassword: "k9sonwow11",
    });

    await createPlaceUseCase.execute({
      placeName: "São Paulo",
      userId: newUser.id,
    });

    await createPlaceUseCase.execute({
      placeName: "Maringá",
      userId: newUser.id,
    });

    const allPlaces = await getPlacesUseCase.execute();

    expect(allPlaces.length).toBe(2);
  });
});
