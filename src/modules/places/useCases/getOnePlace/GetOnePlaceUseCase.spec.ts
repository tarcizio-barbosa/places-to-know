import { InMemoryUsersRepository } from "../../../accounts/repositories/inMemory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../../../accounts/useCases/createUser/CreateUserUseCase";
import { InMemoryPlacesRepository } from "../../repositories/inMemory/InMemoryPlacesRepository";
import { CreatePlaceUseCase } from "../createPlace/CreatePlaceUseCase";
import { GetOnePlaceUseCase } from "./GetOnePlaceUseCase";

let inMemoryPlacesRepository: InMemoryPlacesRepository;
let inMemoryUsersRepository: InMemoryUsersRepository;
let createPlaceUseCase: CreatePlaceUseCase;
let createUserUseCase: CreateUserUseCase;
let getOnePlaceUseCase: GetOnePlaceUseCase;

describe("Get One Place", () => {
  beforeEach(() => {
    inMemoryPlacesRepository = new InMemoryPlacesRepository();
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createPlaceUseCase = new CreatePlaceUseCase(inMemoryPlacesRepository);
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    getOnePlaceUseCase = new GetOnePlaceUseCase(inMemoryPlacesRepository);
  });

  it("Should be able to get one Place", async () => {
    const newUser = await createUserUseCase.execute({
      userEmail: "tarcizio@io.com.br",
      userPassword: "k9sonwow11",
    });

    await createPlaceUseCase.execute({
      placeName: "São Paulo",
      userId: newUser.id,
    });

    const maringa = await createPlaceUseCase.execute({
      placeName: "Maringá",
      userId: newUser.id,
    });

    const maringaPlace = await getOnePlaceUseCase.execute(maringa.id);

    expect(maringaPlace.id).toEqual(maringa.id);
  });
});
