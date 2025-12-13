import React, { useState } from "react";
import Navbar from "../components/Navbar/NavbarSecond";
import VideoPreview from "../components/VideoPreview";
import ChatBox from "../components/ChatBox";
import VideoInfo from "../components/VideoInfo";
import Content from "../components/contentsymmarysection/Content";

export default function VideoSummaryPage() {
  const [activeTab, setActiveTab] = useState("summary");

  return (
    <div className="w-full bg-[rgb(242,243,245)] min-h-screen">
      <div className="mb-6">
        <Navbar />
      </div>

      {/* Main Layout */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 
                      px-3 sm:px-6 md:px-10 
                      max-w-7xl mx-auto w-full"
      >
        <div className="md:col-span-2 bg-white rounded-xl shadow p-4 sm:p-5">
          <VideoPreview
            imageURL={
              "https://i.ytimg.com/vi/h8-qemIbXbo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB6-10MXLHT9rml4ywTLKpNL0kKPw"
            }
          />
          <VideoInfo />
        </div>

        <div className="w-full">
          <ChatBox />
        </div>
      </div>

      {/*  TABS  */}
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-10">
        <div className="mt-10 flex gap-5 text-[18px]">
          {["summary", "transcript", "moments"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg transition
                ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "border-b-2 border-black"
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
