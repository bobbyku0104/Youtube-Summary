import React from "react";
import Navbar from "../components/Navbar/NavbarSecond";
import VideoPreview from"../components/VideoPreview";
import ChatBox from "../components/ChatBox";
import VideoInfo from "../components/VideoInfo";


export default function VideoSummaryPage() {
    return (
        <div className="w-full bg-[rgb(242,243,245)] min-h-screen">

            {/* Navbar */}
            <div className="mb-6">
                <Navbar />
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 
                            px-3 sm:px-6 md:px-10 
                            max-w-7xl mx-auto w-full">

                {/* Left: Video Section */}
                <div className="md:col-span-2 bg-white rounded-xl shadow p-4 sm:p-5">
                    <VideoPreview />
                    <VideoInfo />
                </div>
             {/* Right: Chat Section */}
                <div className="w-full">
                    <ChatBox />
                </div>

            </div>

            

        </div>
    );
}
