import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [videoId, setVideoId] = useState(null);
  const [urlError, setUrlError] = useState("");
  const [summaryData, setSummaryData] = useState(null);

  function changeChatVisiblity() {
    setIsChatOpen((prev) => !prev);
  }

  const extractYoutubeId = (url) => {
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  // URL + ID + validation
  const setYoutubeData = (url) => {
    console.log("YouTube URL:", url);
    // empty check
    if (!url || !url.trim()) {
      setYoutubeUrl("");
      setVideoId(null);
      setUrlError("");
      return;
    }

    // youtube url validation
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      setYoutubeUrl(url);
      setVideoId(null);
      setUrlError("Please enter a valid YouTube URL!");
      return;
    }

    // valid url

    const id = extractYoutubeId(url);
    console.log("YouTube Video ID:", id);

    if (id) {
      setYoutubeUrl(url);
      setVideoId(id);
      setUrlError("");
    } else {
      setYoutubeUrl(url);
      setVideoId(null);
      setUrlError("Invalid YouTube video ID!");
    }
  };

  const value = {
    isChatOpen,
    changeChatVisiblity,

    youtubeUrl,
    videoId,
    urlError,

    setYoutubeData,
    setSummaryData,
    summaryData,
   
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
