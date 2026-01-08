import express from "express";
import cors from "cors";
import summaryRouter from "./routes/summary.route.js";
import chatRoute from "./routes/chat.route.js";
import { connectToRedis } from "./redis/redisClient.js";

const app = express();

// middlewares

connectToRedis();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/summary", summaryRouter);
app.use("/ask", chatRoute);

app.get("/", (req, res) => {
  res.status(500).json({
    status: "running",
  });
});

export default app;
