import { inject, injectable } from "tsyringe";

import { IPlacesRepository } from "../../repositories/IPlacesRepository";
import { GetOnePlaceError } from "../getOnePlace/GetOnePlaceError";

@injectable()
export class DeleteOnePlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ) {}
  async execute(placeId: string): Promise<void> {
    const place = await this.placesRepository.getPlaceById(placeId);

    if (!place) {
      throw new GetOnePlaceError();
    }

    await this.placesRepository.deletePlace(placeId);
  }
}
