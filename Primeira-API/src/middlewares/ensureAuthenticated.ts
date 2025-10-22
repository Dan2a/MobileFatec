import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");
    let t = String(token);

    try {
        const { sub } = verify(t, "123456") as IPayload;

        return next();
    } catch (err) {
        return response.status(401).end();
    }
}
