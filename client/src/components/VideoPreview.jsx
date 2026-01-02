import React from "react";

export default function VideoPreview({ imageURL }) {
  return (
    <div className="w-full rounded-xl border border-zinc-300/10 overflow-hidden">
      {/* Thumbnail Box */}
      <div className="w-full h-[270px] sm:h-[300px] md:h-[360px] lg:h-[450px] flex items-center justify-center flex-col ">
        <img
          className="bg-cover bg-center h-full w-full"
          src={imageURL}
          alt=""
        />
       
      </div>
    </div>
  );
}
