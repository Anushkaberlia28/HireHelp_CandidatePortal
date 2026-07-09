import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

declare module "express" {
  interface Request {
    userId?: string;
  }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return res.status(401).json({ message: "Missing authorization token" });
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Missing token" });
    }

    const decoded = jwt.verify(token, env.JWT_SECRET) as { userId: string };
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
