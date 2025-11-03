import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.get("/api/health", (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
