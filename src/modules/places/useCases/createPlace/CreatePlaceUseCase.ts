import { inject, injectable } from "tsyringe";

import brazilianStates from "../../../../utils/brazilianStates";
import { unsplashApi } from "../../../../utils/unsplashApi";
import { ICreatePlaceDto } from "../../dtos/ICreatePlaceDto";
import { Place } from "../../entities/Place";
import { IPlacesRepository } from "../../repositories/IPlacesRepository";

interface IUnsplashResponseResultLink {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface IUnsplashResponseResult {
  id: string;
  description: string;
  urls: IUnsplashResponseResultLink;
}

interface IUnsplashResponse {
  total: number;
  total_pages: number;
  results: IUnsplashResponseResult[];
}

@injectable()
export class CreatePlaceUseCase {
  constructor(
    @inject("PlacesRepository")
    private placesRepository: IPlacesRepository
  ) {}

  async execute({ placeName, userId }: ICreatePlaceDto): Promise<Place> {
    const placeNameCleared = placeName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const stateMatch = brazilianStates.find(
      (state) =>
        state.Município.normalize("NFD").replace(/[\u0300-\u036f]/g, "") ===
        placeNameCleared
    );

    if (!stateMatch) {
      const unsplashResponse = await unsplashApi.get<IUnsplashResponse>(
        "search/photos",
        {
          params: {
            query: placeName,
          },
        }
      );

      const newPlace = await this.placesRepository.createPlace({
        placeName,
        photoURL: unsplashResponse.data.results[0].urls.raw,
        userId,
      });

      return newPlace;
    }

    const unsplashResponse = await unsplashApi.get<IUnsplashResponse>(
      "search/photos",
      {
        params: {
          query: stateMatch.Município,
        },
      }
    );

    const newPlace = await this.placesRepository.createPlace({
      placeName: stateMatch.Município,
      photoURL: unsplashResponse.data.results[0].urls.raw,
      userId,
    });

    return newPlace;
  }
}
