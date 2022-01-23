import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/UsersRepository";
import { IPlacesRepository } from "../../modules/places/repositories/IPlacesRepository";
import { PlacesRepository } from "../../modules/places/repositories/PlacesRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPlacesRepository>(
  "PlacesRepository",
  PlacesRepository
);
