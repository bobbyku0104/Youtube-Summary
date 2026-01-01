import React from "react";
import YouTube from "react-youtube";

function YouTubeVideoPlayer({ videoID }) {
  function onReadyHandler(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <YouTube
      videoId={videoID}
      opts={opts}
      className="w-full h-full"
      iframeClassName="w-full h-full"
    />
  );
}

export default YouTubeVideoPlayer;
