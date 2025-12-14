import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import VideoPreview from "../components/VideoPreview";
import ChatBox from "../components/ChatBox";
import VideoInfo from "../components/VideoInfo";
import Content from "../components/contentsymmarysection/Content";
import ChatBoxButton from "../components/common/ChatBoxButton";
import { GlobalContext } from "../context/GlobalStates";
import YouTubeVideoPlayer from "../components/YouTubeVideoPlayer";
import BgGradient from "../components/common/BgGradient";

export default function VideoSummaryPage() {
  const [activeTab, setActiveTab] = useState("summary");
  const { changeChatVisiblity, isChatOpen } = useContext(GlobalContext);

  return (
    <div className="w-full bodyBG min-h-screen text-white relative">
      {/* chat box for phone view */}

      <div
        className={` ${
          isChatOpen ? "" : "hidden"
        } py-15 px-5 z-19 backdrop-blur-md h-screen w-full fixed`}
      >
        {/* close chat button */}
        <button
          onClick={changeChatVisiblity}
          className="absolute right-10 top-20"
        >
          X
        </button>
        <BgGradient color={"purple"} />
        <ChatBox />
      </div>

      <div className="mb-6">
        <Navbar />
      </div>

      <ChatBoxButton fn={changeChatVisiblity} />

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-3 sm:px-6 md:px-10 max-w-8xl mx-auto w-full">
        {/* bg glow */}
        <BgGradient />

        <div className="md:col-span-2 containerBG border border-zinc-300/10 rounded-xl shadow p-4 sm:p-5 bg-red-500 z-2">
          {/* youtube player */}
          <div className="w-full flex items-center justify-center aspect-video rounded-xl overflow-hidden border border-zinc-300/10">
            <YouTubeVideoPlayer videoID={"d-_ieXc4K7c"} />
          </div>
          <VideoInfo
            title={`Modern React Development Masterclass
        Modern React `}
          />
        </div>

        {/* chat box */}
        <div className="hidden lg:flex w-full relative">
          <BgGradient />
          <ChatBox />
        </div>
      </div>

      {/*  TABS  */}
      <div className="w-full max-w-8xl mx-auto px-3 sm:px-6 md:px-10">
        <div className="mt-10 flex items-center justify-between sm:justify-start sm:gap-5">
          {["summary", "transcript", "moments"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ease-in-out text-md
                ${
                  activeTab === tab
                    ? "containerBG text-white border border-purple-500"
                    : "border border-black containerBG"
                }`}
            >
              {tab === "summary" && "Summary"}
              {tab === "transcript" && "Transcript"}
              {tab === "moments" && "Key Moments"}
            </button>
          ))}
        </div>
      </div>

      {/*CONTENT SECTION */}
      <Content activeTab={activeTab} />
    </div>
  );
}
