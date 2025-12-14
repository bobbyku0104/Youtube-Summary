import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import VideoPreview from "../components/VideoPreview";
import ChatBox from "../components/ChatBox";
import VideoInfo from "../components/VideoInfo";
import Content from "../components/contentsymmarysection/Content";
import ChatBoxButton from "../components/common/ChatBoxButton";
import { GlobalContext } from "../context/GlobalStates";

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
        <ChatBox />
      </div>

      <div className="mb-6">
        <Navbar />
      </div>

      <ChatBoxButton fn={changeChatVisiblity} />

      {/* Main Layout */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 
                      px-3 sm:px-6 md:px-10 
                      max-w-8xl mx-auto w-full"
      >
        <div className="md:col-span-2 containerBG border border-zinc-300/10 rounded-xl shadow p-4 sm:p-5">
          <VideoPreview
            imageURL={
              "https://i.ytimg.com/vi/h8-qemIbXbo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6-10MXLHT9rml4ywTLKpNL0kKPw"
            }
          />
          <VideoInfo />
        </div>

        <div className="hidden lg:flex w-full">
          <ChatBox />
        </div>
      </div>

      {/*  TABS  */}
      <div className="w-full max-w-8xl mx-auto px-3 sm:px-6 md:px-10">
        <div className="mt-10 flex gap-5">
          {["summary", "transcript", "moments"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ease-in-out
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
