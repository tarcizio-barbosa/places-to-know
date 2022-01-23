import { inject, injectable } from "tsyringe";

import { Place } from "../../entities/Place";
import { IPlacesRepository } from "../../repositories/IPlacesRepository";
import { GetOnePlaceError } from "./GetOnePlaceError";

@injectable()
export class GetOnePlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ) {}
  async execute(placeId: string): Promise<Place> {
    const place = await this.placesRepository.getPlaceById(placeId);

    if (!place) {
      throw new GetOnePlaceError();
    }

    return place;
  }
}
