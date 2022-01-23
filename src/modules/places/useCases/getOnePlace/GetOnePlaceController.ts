import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetOnePlaceUseCase } from "./GetOnePlaceUseCase";

export class GetOnePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { placeId } = request.params;

    const getOnePlaceUseCase = container.resolve(GetOnePlaceUseCase);

    const place = await getOnePlaceUseCase.execute(placeId);

    return response.json(place);
  }
}
