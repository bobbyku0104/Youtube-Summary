import express from "express";
const router = express.Router();

router.get("/transcript", (req, res) => {
  const { videoURL } = req.body;

  if (!videoURL) {
    return res.status(400).json({
      status: "failed",
      message: "url not sent",
    });
  }

  res.status(500).json({
    status: "success",
    message: "under construction",
  });
});

export default router;
