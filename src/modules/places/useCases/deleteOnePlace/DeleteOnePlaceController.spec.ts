// eslint-disable-next-line import/no-extraneous-dependencies
import request from "supertest";
import { Connection } from "typeorm";

import { app } from "../../../../shared/infra/http/app";
import createConnection from "../../../../shared/infra/typeorm";

let connection: Connection;

describe("Delete One Place", () => {
  beforeAll(async () => {
    connection = await createConnection();

    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to delete one Place", async () => {
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

    await request(app)
      .post("/places")
      .send({
        name: "Maringá",
      })
      .set({
        Authorization: `Bearer ${token}`,
      });

    await request(app)
      .delete(`/places/${newPlace.body.id}`)
      .set({
        Authorization: `Bearer ${token}`,
      });

    const allPlaces = await request(app)
      .get("/places")
      .set({
        Authorization: `Bearer ${token}`,
      });

    expect(allPlaces.body.length).toBe(1);
  });
});
