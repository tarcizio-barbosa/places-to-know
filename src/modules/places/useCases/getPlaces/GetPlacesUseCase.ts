import { inject, injectable } from "tsyringe";

import { Place } from "../../entities/Place";
import { IPlacesRepository } from "../../repositories/IPlacesRepository";

@injectable()
export class GetPlacesUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ) {}

  async execute(): Promise<Place[]> {
    const allPlaces = await this.placesRepository.getPlaces();

    return allPlaces;
  }
}
