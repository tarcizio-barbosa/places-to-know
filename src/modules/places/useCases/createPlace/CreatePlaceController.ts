import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePlaceUseCase } from "./CreatePlaceUseCase";

export class CreatePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const { name } = request.body;

    const createPlaceUseCase = container.resolve(CreatePlaceUseCase);

    const newPlace = await createPlaceUseCase.execute({
      placeName: name,
      userId: id,
    });

    return response.status(201).json(newPlace);
  }
}
