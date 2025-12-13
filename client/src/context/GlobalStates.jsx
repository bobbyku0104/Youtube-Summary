import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  function changeChatVisiblity() {
    setIsChatOpen((prev) => !prev);
    console.log(isChatOpen);
  }

  const value = {
    changeChatVisiblity,
    isChatOpen,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
