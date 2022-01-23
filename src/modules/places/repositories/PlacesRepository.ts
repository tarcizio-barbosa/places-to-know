import { getRepository, Repository } from "typeorm";

import { ICreatePlaceDto } from "../dtos/ICreatePlaceDto";
import { Place } from "../entities/Place";
import { IPlacesRepository } from "./IPlacesRepository";

export class PlacesRepository implements IPlacesRepository {
  private repository: Repository<Place>;

  constructor() {
    this.repository = getRepository(Place);
  }

  async createPlace({
    placeName,
    photoURL,
    userId,
  }: ICreatePlaceDto): Promise<Place> {
    const newPlace = this.repository.create({
      placeName,
      photoURL,
      userId,
    });

    await this.repository.save(newPlace);

    return newPlace;
  }
}