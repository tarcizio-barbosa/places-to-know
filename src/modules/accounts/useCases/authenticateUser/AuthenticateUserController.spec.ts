// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import { Connection } from "typeorm";

import { app } from "../../../../shared/infra/http/app";
import createConnection from "../../../../shared/infra/typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDto";

let connection: Connection;

describe("Authenticate User", () => {
  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to authenticate a User", async () => {
    const newUser: ICreateUserDTO = {
      userEmail: "tarcizio@io.com.br",
      userPassword: "k9sonwow11",
    };

    await request(app).post("/users").send({
      email: newUser.userEmail,
      password: newUser.userPassword,
    });

    const userAuthenticated = await request(app).post("/sessions").send({
      email: newUser.userEmail,
      password: newUser.userPassword,
    });

    expect(userAuthenticated.body).toHaveProperty("token");
  });
});
