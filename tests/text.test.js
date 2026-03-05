const request = require("supertest");
const app = require("../src/app"); // make sure this points to your Express app

describe("Text API", () => {
  
  test("should store text", async () => {
    const res = await request(app)
      .post("/text")
      .send({ text: "hello" });

    expect(res.statusCode).toBe(201); // your /text endpoint responds with 201
  });

  test("should return stored texts", async () => {
    const res = await request(app)
      .get("/text");

    expect(res.statusCode).toBe(200);
  });

});

describe("Echo API", () => {

  test("should return the same text sent", async () => {
    const res = await request(app)
      .post("/echo")
      .send({ text: "Hello CI test!" })
      .set("Accept", "application/json");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ echoedText: "Hello CI test!" });
  });

});