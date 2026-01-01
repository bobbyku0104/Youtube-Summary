import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalStates";
import { useContext } from "react";
import summaryApi from "../api/summaryApi";

export default function SearchBar() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setYoutubeData } = useContext(GlobalContext);

  const handleSummarize = () => {
    if (!url.trim()) {
      setError("⚠️ Please enter a valid YouTube URL!");
      return;
    }
    if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
      setError("⚠️ Please enter a valid YouTube URL!");
      return;
    }

    setYoutubeData(url);
    navigate("/VideoSummary");
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl mt-12 relative">
      {/* Input Field */}
      <div className="relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
          📺
        </span>
        <input
          type="text"
          placeholder="Paste YouTube URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={`w-full bg-[#0f172a] border rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none 
            ${
              error ? "border-red-500" : "border-gray-800"
            } focus:border-indigo-500 transition-colors duration-100`}
        />
        <p
          className={`text-red-500 text-sm mt-1 transition-opacity duration-500 ${
            error ? "opacity-100" : "opacity-0"
          }`}
        >
          {error}
        </p>
      </div>

      <button
        onClick={handleSummarize}
        className="w-full md:w-auto px-9 py-3 bg-indigo-800 from-indigo-700 to-indigo-900 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
      >
        <span>Summarize</span>
        <span className="text-xl">➔</span>
      </button>
    </div>
  );
}
