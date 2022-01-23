import { AppError } from "../../../../shared/errors/AppError";

export class AuthenticateUserError extends AppError {
  constructor() {
    super("Incorrect e-mail or password", 401);
  }
}
