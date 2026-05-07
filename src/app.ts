import express from "express";
import usersRouter from "./routes/user";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        message: "TypeScript Express API running"
    });
});

app.use("/api/users", usersRouter);

export default app;