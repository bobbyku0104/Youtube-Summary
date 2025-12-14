import React, { useState } from "react";
import MessageBubble from "./MessageBubble";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I've analyzed the video. Ask me anything!",
      time: "1:56 pm",
    },
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input, time: "Now" }]);
    setInput("");
  };

  return (
    <div className="h-full w-full containerBG border border-zinc-300/10 shadow rounded-xl flex flex-col p-4">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold mb-3">💬 Ask AI</h2>

      {/* Chat Messages */}
      <div
        className="flex-1 border-t border-zinc-300/10 overflow-y-auto p-3 
                      text-sm sm:text-base"
      >
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} {...msg} />
        ))}
      </div>

      {/* Input Section */}
      <div className="flex items-center gap-2 mt-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 border rounded-lg px-3 py-2 
                     text-sm sm:text-base
                     outline-none focus:ring-2 "
        />

        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-4 sm:px-5 py-2 
                     rounded-lg text-sm sm:text-base
                     hover:bg-purple-800 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
