import React from "react";

function ChatBoxButton({ fn }) {
  return (
    <button
      onClick={fn}
      className="h-15 w-18 bg-gradient-to-r from-purple-400 to-purple-500 lg:hidden border-t-3 border-l-3 border-b-3 border-zinc-300/10 items-center justify-center absolute bottom-2 right-0 rounded-l-full p-2 fixed animate-pulse"
    >
      Ask AI
    </button>
  );
}

export default ChatBoxButton;
