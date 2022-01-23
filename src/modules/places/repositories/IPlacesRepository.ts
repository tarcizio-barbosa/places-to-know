import { ICreatePlaceDto } from "../dtos/ICreatePlaceDto";
import { Place } from "../entities/Place";

export interface IPlacesRepository {
  createPlace(data: ICreatePlaceDto): Promise<Place>;
  getPlaces(): Promise<Place[]>;
}
