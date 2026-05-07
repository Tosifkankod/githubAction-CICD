import request from "supertest";
import app from "../src/app";

describe("Users API", () => {
    test("GET / should work", async () => {
        const res = await request(app).get("/");

        expect(res.status).toBe(200);

        expect(res.body.message).toBe(
            "TypeScript Express API running"
        );
    });

    test("GET /api/users returns users", async () => {
        const res = await request(app).get("/api/users");

        expect(res.status).toBe(200);

        expect(Array.isArray(res.body)).toBe(true);
    });

    test("GET /api/users/1 returns user", async () => {
        const res = await request(app).get("/api/users/1");

        expect(res.status).toBe(200);

        expect(res.body.name).toBe("John");
    });

    test("POST /api/users creates user", async () => {
        const res = await request(app)
            .post("/api/users")
            .send({
                name: "Alice"
            });

        expect(res.status).toBe(201);

        expect(res.body.name).toBe("Alice");
    });
});