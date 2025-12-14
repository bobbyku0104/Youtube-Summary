import React from "react";

function BgGradient({ color }) {
  const colors = { purple: "bg-purple-500" };
  return (
    <div
      className={`${
        colors[color] ? colors[color] : " bg-blue-500"
      } h-101 w-92 blur-[150px] opacity-18 absolute rounded-full`}
    ></div>
  );
}

export default BgGradient;
