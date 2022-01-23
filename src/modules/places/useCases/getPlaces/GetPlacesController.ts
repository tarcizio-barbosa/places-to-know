import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetPlacesUseCase } from "./GetPlacesUseCase";

export class GetPlacesController {
  async handle(_request: Request, response: Response): Promise<Response> {
    const getPlacesUseCase = container.resolve(GetPlacesUseCase);

    const allPlaces = await getPlacesUseCase.execute();

    return response.json(allPlaces);
  }
}
