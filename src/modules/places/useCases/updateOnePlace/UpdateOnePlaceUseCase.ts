import { inject, injectable } from "tsyringe";

import { Place } from "../../entities/Place";
import { IPlacesRepository } from "../../repositories/IPlacesRepository";
import { GetOnePlaceError } from "../getOnePlace/GetOnePlaceError";

@injectable()
export class UpdateOnePlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ) {}
  async execute(placeId: string, placeName: string): Promise<Place> {
    const place = await this.placesRepository.getPlaceById(placeId);

    if (!place) {
      throw new GetOnePlaceError();
    }

    await this.placesRepository.updatePlace(placeId, placeName);

    return place;
  }
}
