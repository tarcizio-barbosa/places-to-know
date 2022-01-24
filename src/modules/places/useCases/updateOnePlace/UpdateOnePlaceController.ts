import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetOnePlaceUseCase } from "../getOnePlace/GetOnePlaceUseCase";
import { UpdateOnePlaceUseCase } from "./UpdateOnePlaceUseCase";

export class UpdateOnePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { placeId } = request.params;

    const { name } = request.body;

    const updateOnePlaceUseCase = container.resolve(UpdateOnePlaceUseCase);
    const getOnePlaceUseCase = container.resolve(GetOnePlaceUseCase);

    await updateOnePlaceUseCase.execute(placeId, name);

    const placeUpdated = await getOnePlaceUseCase.execute(placeId);

    return response.json(placeUpdated);
  }
}
