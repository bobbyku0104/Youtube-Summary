import { chatWithAI } from "../service/chat.service.js";

export async function chatController(req, res) {
  const { question, transcript } = req.body;

  // validation
  if (!question || !transcript) {
    return res.status(400).json({
      status: "failed",
      message: "question or transcript is missing",
    });
  }

  try {
    // ask ai
    const response = await chatWithAI(question, transcript);

    // validate and send to client
    if (response) {
      return res.status(200).json({
        status: "success",
        message: "question answered",
        data: response,
      });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "failed to get answer from AI",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "error while asking AI",
      error,
    });
  }
}
