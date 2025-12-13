import React from "react";

function ChatBoxButton({ fn }) {
  return (
    <button
      onClick={fn}
      className="h-20 w-20 lg:hidden bg-gradient-to-br from-orange-400 to-orange-700 items-center justify-center absolute bottom-2 right-2 rounded-full p-2 fixed"
    >
      chat
    </button>
  );
}

export default ChatBoxButton;
