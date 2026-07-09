import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "5000",
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
  JWT_SECRET: process.env.JWT_SECRET || "supersecret",
};
