const request = require("supertest");
const app = require("../src/app"); // Express app

describe("Text API", () => {
  
  test("should store text and return success", async () => {
  const res = await request(app)
    .post("/text")
    .send({ text: "hello" });

  expect(res.statusCode).toBe(201);  // status is still 201
  expect(res.body).toEqual({
    message: "text stored",
    texts: ["hello"]
  });  // matches what your endpoint actually returns
});

  test("should return stored texts including 'hello'", async () => {
    const res = await request(app)
      .get("/text");

    expect(res.statusCode).toBe(200);            // check HTTP status
    expect(res.body).toContain("hello");         // check response array contains the text
  });

});

describe("Echo API", () => {

  test("should return the same text sent", async () => {
    const res = await request(app)
      .post("/echo")
      .send({ text: "Hello CI test!" })
      .set("Accept", "application/json");

    expect(res.statusCode).toBe(200);            // check HTTP status
    expect(res.body).toEqual({ echoedText: "Hello CI test!" }); // check response JSON
  });

});