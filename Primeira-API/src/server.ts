import { NextFunction, Request, Response } from "express";
import express from "express";
import { router } from "./routes";
import "express-async-error";
import "reflect-metadata";
import "./database";

const app = express();
// npm install typescript express ts-node-dev
// npm install @types/express
// npm install express-async-error
// npm install reflect-metadata
// npm install jsonwebtoken
// npm install @types/jsonwebtoken
// npm install bcryptjs

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        console.log("erro");
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
});

app.listen(3000, () => {
    console.log("Start at =>3000");
});
