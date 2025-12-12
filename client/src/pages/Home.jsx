
import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#020617] flex flex-col items-center overflow-hidden relative">
            <Navbar />

            <main className="flex flex-col items-center text-center mt-8 px-4 z-10">

                <div className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-5">
                    ✨ AI-Powered Video Intelligence
                </div>

                {/* Hero Section */}
                <h1 className="text-5xl md:text-6xl text-white max-w-4xl leading-none font-bold">
                    Summarize any <span className="text-indigo-500">YouTube</span>
                    <span className="block text-indigo-500 text-center">video</span>
                    <span className="block">in seconds</span>
                </h1>

                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mt-6">
                    Paste a YouTube link to generate an instant summary, extract key moments, and chat with AI about the content.
                </p>

                <SearchBar />

                <div className="flex gap-6 mt-10 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">🟢 No signup required</div>
                    <div className="flex items-center gap-2">🟢 Free to use</div>
                    <div className="flex items-center gap-2">🟢 Instant results</div>
                </div>
            </main>

            <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10">
                <div className="w-[650px] h-[450px] bg-indigo-600/20 rounded-full blur-3xl"></div>
            </div>


        </div>
    )
}

export default Home







