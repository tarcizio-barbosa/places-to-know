import express from "express";
import "../typeorm";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "test curl" });
});

export { app };
