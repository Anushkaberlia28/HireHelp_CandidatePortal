import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../../../config/env.js";
import { seedUserData } from "../../../data/seed.js";
import { getProfile } from "../../profile/services/profile.service.js";
import { createUser, findUserByEmail, findUserById } from "../models/user.model.js";

const JWT_SECRET = env.JWT_SECRET;

type RegisterInput = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export async function register(data: RegisterInput) {
  const { fullName, email, password, confirmPassword } = data;

  if (!fullName || !email || !password || !confirmPassword) {
    throw new Error("All fields are required.");
  }

  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already in use.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser({ fullName, email, password: hashedPassword });
  seedUserData(user.id, fullName, email);
  const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

  return { user: { id: user.id, fullName: user.fullName, email: user.email }, accessToken };
}

type LoginInput = {
  email: string;
  password: string;
};

export async function login(data: LoginInput) {
  const { email, password } = data;

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password.");
  }

  if (!(await getProfile(user.id))) {
    seedUserData(user.id, user.fullName, user.email);
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error("Invalid email or password.");
  }

  const accessToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

  return { user: { id: user.id, fullName: user.fullName, email: user.email }, accessToken };
}

export async function getMe(token: string) {
  if (!token) {
    throw new Error("Missing authorization token.");
  }

  const decoded = jwt.verify(token, JWT_SECRET);
  const payload = typeof decoded === "object" && decoded !== null ? decoded : null;

  if (!payload || !("userId" in payload)) {
    throw new Error("Invalid token.");
  }

  const user = await findUserById(payload.userId);
  if (!user) {
    throw new Error("User not found.");
  }

  return { id: user.id, fullName: user.fullName, email: user.email };
}
