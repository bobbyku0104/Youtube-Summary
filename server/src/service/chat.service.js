import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";

configDotenv();

/**
 * Initialize Gemini client
 */
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * Clean AI response by removing markdown fences if present
 */
function cleanJSON(text) {
  if (!text) return text;

  return text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
}

/**
 * Safely parse JSON from AI response
 */
function safeParseJSON(text) {
  try {
    return JSON.parse(text);
  } catch {
    // Fallback: extract first JSON object
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No JSON object found");
    return JSON.parse(match[0]);
  }
}

/**
 * Ask a question about a YouTube transcript
 * @param {string} question
 * @param {string} transcript
 * @returns {Promise<Object>}
 */
export async function chatWithAI(question, transcript) {
  const prompt = `
You are an AI assistant that answers questions ONLY using the given YouTube transcript.

STRICT RULES:
- Do NOT use outside knowledge
- Do NOT assume anything
- If the answer is not clearly present, say so
- Return ONLY valid JSON
- Do NOT wrap JSON in markdown
- Keep answers short, clear, and factual

JSON FORMAT:
{
  "question": "${question}",
  "answer": "Answer strictly based on the transcript",
  "confidence": "high | medium | low",
  "supporting_evidence": [
    "Relevant line or paraphrase from transcript"
  ],
  "not_found": false
}

If the answer is NOT in the transcript, return:
{
  "question": "${question}",
  "answer": "This information is not mentioned in the video.",
  "confidence": "low",
  "supporting_evidence": [],
  "not_found": true
}

Transcript:
"""
${transcript}
"""
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.2,
    },
  });

  const rawText = response.text;

  try {
    const cleaned = cleanJSON(rawText);
    return safeParseJSON(cleaned);
  } catch (error) {
    console.error(" AI RAW RESPONSE:\n", rawText);
    throw new Error("AI response was not valid JSON");
  }
}
