import supertest from "supertest";
import { connect, disconnect } from "../src/database/config";
import app from "../src/app";

describe("Test in helloWorld", () => {
  // You want to connect to database before each test
  beforeAll(() => {
    connect();
  });

  //Close the connection after each test
  afterAll(done => {
    disconnect(done);
  });

  test("Should print hello world", async () => {
    const res = await supertest(app).get("/");
    expect(res.body.message).toBe("Hello World!");
  });
});

//! If not importing anything, write an "export {}" to avoid typescript isolated modules errors
