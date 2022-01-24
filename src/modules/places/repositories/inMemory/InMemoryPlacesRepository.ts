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

  async getPlaceById(placeId: string): Promise<Place> {
    const place = this.places.find((place) => place.id === placeId);

    return place;
  }

  async updatePlace(placeId: string, placeName: string): Promise<void> {
    const placeIndex = this.places.findIndex((place) => place.id === placeId);

    const updatedPlace = this.places[placeIndex];

    updatedPlace.placeName = placeName;
  }

  async deletePlace(id: string): Promise<void> {
    const placeIndex = this.places.findIndex((place) => place.id === id);

    this.places.splice(placeIndex, 1);
  }
}
