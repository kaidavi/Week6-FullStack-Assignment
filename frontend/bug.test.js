import request from "supertest";
import app from "../server.js";

describe("Bug API", () => {
  it("should create a new bug", async () => {
    const res = await request(app)
      .post("/api/bugs")
      .send({ title: "Sample Bug", description: "This is a test bug" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("title", "Sample Bug");
  });
});
