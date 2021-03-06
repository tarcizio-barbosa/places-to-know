import "reflect-metadata";
import "express-async-errors";
import cors from "cors";
import { config } from "dotenv";
import express, { NextFunction, Request, Response } from "express";

import { AppError } from "../../errors/AppError";
import createConnectionDb from "../typeorm/index";
import "../../container";
import { router } from "./routes";

config();

const app = express();

createConnectionDb();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.errorMessage,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
