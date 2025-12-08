import express from "express";
import cors from "cors";

const app = express();

// middlewares

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(500).json({
    status: "running",
  });
});

export default app;
