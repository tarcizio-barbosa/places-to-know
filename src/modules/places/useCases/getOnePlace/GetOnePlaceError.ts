import { AppError } from "../../../../shared/errors/AppError";

export class GetOnePlaceError extends AppError {
  constructor() {
    super("Place not found", 404);
  }
}
