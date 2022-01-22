export class AppError {
  readonly errorMessage: string;

  readonly statusCode: number;

  constructor(errorMessage: string, statusCode = 400) {
    this.errorMessage = errorMessage;
    this.statusCode = statusCode;
  }
}
