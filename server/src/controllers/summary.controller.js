import { getTranscriptWithFallback } from "../service/transcript.service.js";
import { summarizeUsingGemini } from "../service/summary.service.js";
import { cacheVideoData, getCacheVideoData } from "../redis/redisClient.js";

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
    // check for cached video data
    const cachedVideoData = await getCacheVideoData(videoId);
    if (cachedVideoData) {
      console.log("Video Data Found in Cache, sent as response");
      return res.status(200).json({
        status: "success",
        message: "summarized successfully",
        source: "cached",
        data: {
          videoSummary: cachedVideoData.summary,
          transcript: cachedVideoData.transcript,
        },
      });
    } else {
      console.log("Video is Not Cached");
    }

    // if cache data not found

    const transcript = await getTranscriptWithFallback(videoId);
    if (transcript) {
      console.log("Transcript Found, Now Summarizing it");
      const videoSummary = await summarizeUsingGemini(transcript);
      console.log("summary function completed");

      console.log("Caching VideoData...");
      await cacheVideoData(videoId, transcript, videoSummary);

      console.log("Video Data Cached..");
      return res.status(200).json({
        status: "success",
        message: "summarized successfully",
        source: "fresh data",
        data: { videoSummary, transcript },
      });
    }

    return res.status(500).json({
      status: "failed",
      message: "failed to generate transcript, error in AI part",
    });
  } catch (error) {
    console.log("Error in summarizing");
    return res.status(500).json({
      status: "failed",
      message: "failed to summarize video try changing API Key",
      err: error,
    });
  }
}
