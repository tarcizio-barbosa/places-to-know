// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import { Connection } from "typeorm";

import { app } from "../../../../shared/infra/http/app";
import createConnection from "../../../../shared/infra/typeorm";

let connection: Connection;

describe("Create Place", () => {
  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new Place", async () => {
    await request(app).post("/users").send({
      email: "tarcizio@io.com.br",
      password: "k9sonwow11",
    });

    const newSession = await request(app).post("/sessions").send({
      email: "tarcizio@io.com.br",
      password: "k9sonwow11",
    });

    const { token } = newSession.body;

    const newPlace = await request(app)
      .post("/places")
      .send({
        name: "São Paulo",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(newPlace.status).toBe(201);
  });
});
