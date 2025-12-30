import { getTranscriptWithFallback } from "../service/transcript.service.js";
import { summarizeUsingGemini } from "../service/summary.service.js";

export async function summaryController(req, res) {
  const videoId = req.params.videoId;

  //   validate video id

  if (!videoId) {
    return res.status(400).json({
      status: "failed",
      message: "video id not found in url",
    });
  }

  //   get transcript
  try {
    const transcript = await getTranscriptWithFallback(videoId);
    if (transcript) {
      const videoSummary = await summarizeUsingGemini(transcript);
      return res.status(200).json({
        status: "success",
        message: "summarized successfully",
        data: { videoSummary, transcript },
      });
    }

    return res.status(500).json({
      status: "failed",
      message: "failed to generate transcript",
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "failed to summarize video",
    });
  }
}
