import { ICreatePlaceDto } from "../../dtos/ICreatePlaceDto";
import { Place } from "../../entities/Place";
import { IPlacesRepository } from "../IPlacesRepository";

export class InMemoryPlacesRepository implements IPlacesRepository {
  private places: Place[] = [];

  async createPlace({
    placeName,
    photoURL,
    userId,
  }: ICreatePlaceDto): Promise<Place> {
    const newPlace = new Place();

    Object.assign(newPlace, {
      placeName,
      photoURL,
      userId,
    });

    this.places.push(newPlace);

    return newPlace;
  }

  async getPlaces(): Promise<Place[]> {
    return this.places;
  }
}
