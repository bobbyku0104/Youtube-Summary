import React from "react";

export default function MessageBubble({ sender, text, time }) {
  return (
    <div
      className={`mb-3 p-2 rounded-lg w-fit max-w-[85%] ${
        sender === "ai"
          ? "bg-gray-200 text-black"
          : "bg-indigo-600 text-white ml-auto"
      }`}
    >
      <p>{text}</p>
      <span className="text-[10px] opacity-70">{time}</span>
    </div>
  );
}