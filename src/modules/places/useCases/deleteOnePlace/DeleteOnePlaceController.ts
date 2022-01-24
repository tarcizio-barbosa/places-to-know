import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteOnePlaceUseCase } from "./DeleteOnePlaceUseCase";

export class DeleteOnePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { placeId } = request.params;

    const deleteOnePlaceUseCase = container.resolve(DeleteOnePlaceUseCase);

    await deleteOnePlaceUseCase.execute(placeId);

    return response.json({ message: "This place has been deleted." });
  }
}
