import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";
configDotenv();

const KEY = process.env.GEMINI_API_KEY;
console.log(KEY);
const ai = new GoogleGenAI({
  apiKey: KEY,
});

/**
 * Generate a detailed, category-wise summary of a YouTube transcript
 * @param {string} transcript - Full YouTube transcript
 * @returns {Promise<Object>} - Structured summary JSON
 */
export async function summarizeUsingGemini(transcript) {
  if (!transcript || transcript.trim().length === 0) {
    throw new Error("Transcript is required");
  }

  const prompt = `
  You are a professional content analyst and educator.

  Analyze the following YouTube video transcript and return ONLY valid JSON
  in the exact structure below. Make the summary to the point, clear, and easy to understand.

  IMPORTANT RULES:
  - Do NOT add extra text
  - Do NOT wrap JSON in markdown
  - Keep explanations meaningful, not shallow
  - keep it short and simple

  JSON STRUCTURE:
  {
    "title": "Short and meaningful title",
    "overall_summary": "Detailed paragraph summarizing the entire video",
    "key_takeaways": [
      "Major learning or insight 1",
      "Major learning or insight 2",
      "Major learning or insight 3"
    ],
    "key_points": [
      "Important technical or conceptual point",
      "Another important point",
      "Supporting detail"
    ],
    "conclusion": "Final message or outcome of the video"
  }

  Transcript:
  """
  ${transcript}
  """
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  console.log(response.text);

  try {
    return JSON.parse(response.text);
  } catch (error) {
    throw new Error("AI response was not valid JSON");
  }
}
