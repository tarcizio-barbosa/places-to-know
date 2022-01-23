import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = await request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const { user, token } = await authenticateUserUseCase.execute({
      userEmail: email,
      userPassword: password,
    });

    return response.json({ user, token });
  }
}
