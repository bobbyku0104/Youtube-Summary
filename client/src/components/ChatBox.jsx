import React, { useState, useContext } from "react";
import MessageBubble from "./MessageBubble";
import { GlobalContext } from "../context/GlobalStates.jsx";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I've analyzed the video. Ask me anything!",
      time: "Now",
    },
  ]);

  const { summaryData } = useContext(GlobalContext);
  const transcript = summaryData?.transcript || "";

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Safety check
    if (!transcript) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Transcript is still loading. Please try again in a moment.",
          time: "Now",
        },
      ]);
      return;
    }

    const userQuestion = input.trim();

    // User message
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userQuestion, time: "Now" },
    ]);
    setInput("");

    try {
      const response = await fetch("http://localhost:8080/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userQuestion,
          transcript: transcript,
        }),
      });

      const result = await response.json();

      if (result.status === "success" && !result.data.not_found) {
        const aiText = `
${result.data.answer}

Confidence: ${result.data.confidence}

Evidence:
- ${result.data.supporting_evidence.join("\n- ")}
        `.trim();

        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: aiText, time: "Now" },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: "Sorry, I couldn’t find an answer to that in the video.",
            time: "Now",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong while contacting the server.",
          time: "Now",
        },
      ]);
    }
  };

  return (
    <div className="w-full max-w-md h-[700px] containerBG border border-zinc-300/10 shadow rounded-xl flex flex-col p-4">
      <h2 className="text-lg font-semibold mb-3">💬 Ask AI</h2>

      {/* Messages */}
      <div className="flex-1 border-t border-zinc-300/10 overflow-y-auto hide-scrollbar p-3 text-sm">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} {...msg} />
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 mt-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            transcript ? "Ask a question..." : "Loading transcript..."
          }
          disabled={!transcript}
          className="flex-1 border rounded-lg px-3 py-2 outline-none disabled:opacity-50"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          disabled={!transcript}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
