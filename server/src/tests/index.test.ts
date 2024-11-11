import request from "supertest";
import app from "..";

describe("Root Endpoint", () => {
    it("should return a welcome message", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.body.data).toBe("Hello, TypeScript Express!");
    });
});