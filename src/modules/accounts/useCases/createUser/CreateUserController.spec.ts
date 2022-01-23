// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import { Connection } from "typeorm";

import { app } from "../../../../shared/infra/http/app";
import createConnection from "../../../../shared/infra/typeorm";

let connection: Connection;

describe("Create User Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create a new User", async () => {
    const response = await request(app).post("/users").send({
      email: "tarcizio@io.com.br",
      password: "k9sonwow11",
    });

    expect(response.status).toBe(201);
  });
});
