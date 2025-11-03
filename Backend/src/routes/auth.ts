import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

const router = Router();
const prisma = new PrismaClient();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  name: z.string().optional()
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4)
});

function generateToken(userId: number) {
  const secret = process.env.JWT_SECRET || "replace_me";
  return jwt.sign({ userId }, secret, { expiresIn: "7d" });
}

router.post("/register", async (req, res) => {
  try {
    const data = registerSchema.parse(req.body);
    const existing = await prisma.user.findUnique({ where: { email: data.email } });
    if (existing) return res.status(400).json({ error: "User already exists" });
    const hashed = await bcrypt.hash(data.password, 8);
    const user = await prisma.user.create({ data: { email: data.email, password: hashed, name: data.name } });
    const token = generateToken(user.id);
    res.status(201).json({ token, user: { id: user.id, email: user.email, name: user.name }});
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = loginSchema.parse(req.body);
    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) return res.status(400).json({ error: "User not found" });
    const valid = await bcrypt.compare(data.password, user.password);
    if (!valid) return res.status(400).json({ error: "Invalid credentials" });
    const token = generateToken(user.id);
    res.json({ token, user: { id: user.id, email: user.email, name: user.name }});
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/me", async (req, res) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ error: "No token" });
    const token = header.split(" ")[1];
    const secret = process.env.JWT_SECRET || "replace_me";
    const payload = jwt.verify(token, secret) as { userId: number };
    const user = await prisma.user.findUnique({ where: { id: payload.userId } });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ id: user.id, email: user.email, name: user.name });
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

export default router;
