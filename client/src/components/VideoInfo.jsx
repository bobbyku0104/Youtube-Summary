import React from "react";

export default function VideoInfo() {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">
        Modern React Development Masterclass
      </h1>

      <p className="text-gray-500 mt-1">
        Tech Academy • 1.2M views • 2 months ago
      </p>

      <div className="flex gap-2 mt-3">
        <span className="px-3 py-1 bg-gray-200 rounded-lg">React</span>
        <span className="px-3 py-1 bg-gray-200 rounded-lg">Web Development</span>
        <span className="px-3 py-1 bg-gray-200 rounded-lg">JavaScript</span>
      </div>
    </div>
  );
}