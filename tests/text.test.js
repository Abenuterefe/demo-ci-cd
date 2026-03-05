const request = require("supertest");
const app = require("../src/app");

describe("Text API", () => {

  test("should store text", async () => {

    const res = await request(app)
      .post("/text")
      .send({ text: "hello" });

    expect(res.statusCode).toBe(201);
  });

  test("should return stored texts", async () => {

    const res = await request(app)
      .get("/text");

    expect(res.statusCode).toBe(200);
  });

});