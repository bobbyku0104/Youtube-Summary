import React from "react";

export default function VideoPreview({ imageURL }) {
  return (
    <div className="w-full bg-gray-100 border rounded-xl shadow-sm overflow-hidden">
      {/* Thumbnail Box */}
      <div className="w-full h-[270px] sm:h-[300px] md:h-[360px] lg:h-[450px] bg-gray-300 flex items-center justify-center flex-col ">
        <img
          className="bg-cover bg-center h-full w-full"
          src={imageURL}
          alt=""
        />
        {/* <span className="text-5xl">🎬</span>
        <div className="p-4 ">
        <p className="text-gray-800 font-medium text-lg">YouTube Video Preview</p>
        <p className="text-blue-600 text-sm mt-1 truncate">
          https://youtu.be/exampleLink123
        </p> */}
      </div>
    </div>
  );
}
