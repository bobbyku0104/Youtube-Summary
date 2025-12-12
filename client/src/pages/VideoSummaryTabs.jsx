import React from "react";
import Navbar from "../components/Navbar/NavbarSecond";
import VideoPreview from "../components/VideoPreview";
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

            <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 md:px-10">
                <div className="mt-10 flex flex-row gap-5 text-[20px]">
                    <button className=" p-[5px] rounded-lg border-b-2 border-black  ">
                        Summary
                    </button>
                    <button className="p-[5px] rounded-lg border-b-2 border-black ">
                        Transcript
                    </button>
                    <button className="p-[5px] rounded-lg border-b-2 border-black ">
                        Key Moments
                    </button>

                </div>
            </div>



            {/* content section */}

            <div className="px-3 sm:px-6 md:px-10 max-w-7xl mx-auto w-full">
                <div className="w-full my-10 bg-white rounded-2xl shadow p-6 sm:p-8">

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>

                    <p className="text-gray-700 leading-relaxed">
                        This comprehensive video explores modern React development practices and patterns.
                        The presenter covers key concepts including:
                    </p>

                    <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-800">
                        <li>
                            <strong>Component Architecture</strong> – Best practices for structuring React
                            components with hooks and composition patterns
                        </li>

                        <li>
                            <strong>State Management</strong> – Comparison of useState, useReducer, and
                            Context API for managing application state
                        </li>

                        <li>
                            <strong>Performance Optimization</strong> – Memoization, code splitting,
                            and lazy loading techniques
                        </li>

                        <li>
                            <strong>Testing Strategies</strong> – Unit testing, integration testing,
                            and E2E best practices
                        </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Key Takeaways:</h3>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                        <li>Use functional components with hooks for cleaner, reusable code</li>
                        <li>Implement error boundaries to handle component failures gracefully</li>
                        <li>Optimize performance by understanding React's rendering cycle</li>
                        <li>Write tests to ensure code quality and avoid regressions</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mt-6">
                        The video also discusses emerging patterns like Suspense and concurrent rendering
                        that are shaping the future of React development.
                    </p>
                    

                    <div className="flex items-center gap-4 mt-4">
                        <button className="rounded-2xl px-5 py-2 flex items-center gap-2 p-[5px]  border-b-2 border-black ">
                        💾 Save Summary

                        </button>

                        <button className="rounded-2xl px-5 py-2 flex items-center gap-2 p-[5px]  border-b-2 border-black ">
                         📥 Export as PDF
                         </button>
                        <button className="rounded-2xl px-5 py-2 flex items-center gap-2 p-[5px]  border-b-2 border-black ">
                         📋 Copy to Clipboard
                        </button>
                    </div>
                    </div>
                    
                    </div>

            


        </div>
    );
}
