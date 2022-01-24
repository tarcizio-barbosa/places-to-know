import { InMemoryUsersRepository } from "../../../accounts/repositories/inMemory/InMemoryUsersRepository";
import { CreateUserUseCase } from "../../../accounts/useCases/createUser/CreateUserUseCase";
import { InMemoryPlacesRepository } from "../../repositories/inMemory/InMemoryPlacesRepository";
import { CreatePlaceUseCase } from "../createPlace/CreatePlaceUseCase";
import { GetPlacesUseCase } from "../getPlaces/GetPlacesUseCase";
import { DeleteOnePlaceUseCase } from "./DeleteOnePlaceUseCase";

let inMemoryUsersRepository: InMemoryUsersRepository;
let createUserUseCase: CreateUserUseCase;
let inMemoryPlacesRepository: InMemoryPlacesRepository;
let createPlaceUseCase: CreatePlaceUseCase;
let deleteOnePlaceUseCase: DeleteOnePlaceUseCase;
let getPlacesUseCase: GetPlacesUseCase;

describe("Delete One Place", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryPlacesRepository = new InMemoryPlacesRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
    createPlaceUseCase = new CreatePlaceUseCase(inMemoryPlacesRepository);
    deleteOnePlaceUseCase = new DeleteOnePlaceUseCase(inMemoryPlacesRepository);
    getPlacesUseCase = new GetPlacesUseCase(inMemoryPlacesRepository);
  });

  it("Should be able to dele one Place", async () => {
    const user = await createUserUseCase.execute({
      userEmail: "tarcizio@io.com.br",
      userPassword: "k9sonwow11",
    });

    const newPlace = await createPlaceUseCase.execute({
      placeName: "São Paulo",
      userId: user.id,
    });

    await createPlaceUseCase.execute({
      placeName: "Maringá",
      userId: user.id,
    });

    await deleteOnePlaceUseCase.execute(newPlace.id);

    const allPlaces = await getPlacesUseCase.execute();

    expect(allPlaces.length).toBe(1);
  });
});
