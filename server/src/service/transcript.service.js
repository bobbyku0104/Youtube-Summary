import { fetchTranscript } from "youtube-transcript-plus";

export async function getTranscriptWithFallback(videoId) {
  try {
    // 1. Try to get English first
    console.log("Attempting to fetch English transcript...");
    const transcript = await fetchTranscript(videoId, { lang: "en" });
    
    // FIX: Combine all segments into one string efficiently
    const transcriptText = transcript.map(item => item.text).join(" ");
    
    return transcriptText; // Return the clean text string for your summary controller
    
  } catch (error) {
    console.warn("English transcript not found, trying Hindi...");

    try {
      // 2. Fallback to Hindi if English fails
      const transcript = await fetchTranscript(videoId, { lang: "hi" });
      
      // FIX: Same logic here
      const transcriptText = transcript.map(item => item.text).join(" ");
      
      return transcriptText;

    } catch (finalError) {
      console.error("Neither English nor Hindi transcripts were found.");
      throw finalError; 
    }
  }
}