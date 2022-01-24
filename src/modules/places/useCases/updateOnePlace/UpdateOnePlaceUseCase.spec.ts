import { InMemoryUsersRepository } from "../../../accounts/repositories/inMemory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../../../accounts/useCases/createUser/CreateUserUseCase";
import { InMemoryPlacesRepository } from "../../repositories/inMemory/InMemoryPlacesRepository";
import { CreatePlaceUseCase } from "../createPlace/CreatePlaceUseCase";
import { UpdateOnePlaceUseCase } from "./UpdateOnePlaceUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;
let inMemoryPlacesRepository: InMemoryPlacesRepository;
let createPlaceUseCase: CreatePlaceUseCase;
let updateOnePlaceUseCase: UpdateOnePlaceUseCase;

describe("Update One Place", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryPlacesRepository = new InMemoryPlacesRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    createPlaceUseCase = new CreatePlaceUseCase(inMemoryPlacesRepository);
    updateOnePlaceUseCase = new UpdateOnePlaceUseCase(inMemoryPlacesRepository);
  });

  it("Should be able to update one Place", async () => {
    const user = await createUserUseCase.execute({
      userEmail: "tarcizio@io.com.br",
      userPassword: "k9sonwow11",
    });

    const newPlace = await createPlaceUseCase.execute({
      placeName: "São Paulo",
      userId: user.id,
    });

    const placeUpdated = await updateOnePlaceUseCase.execute(
      newPlace.id,
      "Maringá"
    );

    expect(placeUpdated.placeName).toBe("Maringá");
  });
});
