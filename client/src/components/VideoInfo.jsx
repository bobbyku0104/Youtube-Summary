import React from "react";

export default function VideoInfo({ title }) {
  return (
    <div className="mt-4">
      <h1 className="text-xl lg:text-2xl font-semibold">
        {title.slice(0, 60)}...
      </h1>

      <p className="text-gray-500 mt-1">
        Tech Academy • 1.2M views • 2 months ago
      </p>

      <div className="flex gap-2 mt-3">
        <span className="px-3 py-1 bg-purple-600 rounded-lg">React</span>
        <span className="px-3 py-1 bg-purple-400 rounded-lg">
          Web Development
        </span>
        <span className="px-3 py-1 bg-purple-500 rounded-lg">JavaScript</span>
      </div>
    </div>
  );
}
