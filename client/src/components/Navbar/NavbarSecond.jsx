import React, { useState } from "react";

export default function NavbarSecond() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between px-6 sm:px-40 py-4 border-b border-gray-300 bg-white">
      
      
      <h1 className="text-[25px] font-bold text-gray-900">VidSummary</h1>

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-8 text-gray-700 text-lg font-medium">
        <button className="hover:text-black transition text-[15px]">Dashboard</button>
        <button className="hover:text-black transition text-[15px]">Saved Summaries</button>
      </div>

      {/* Login Button - Desktop */}
      <div className="hidden sm:block">
        <button className="border border-gray-400 px-5 py-2 rounded-lg hover:bg-gray-100 transition text-[13px]">
          Login
        </button>
      </div>

      {/* Hamburger Icon - Mobile */}
      <div className="sm:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 sm:hidden">
          <button className="py-2 text-gray-700 hover:text-black text-[15px]">Dashboard</button>
          <button className="py-2 text-gray-700 hover:text-black text-[15px]">Saved Summaries</button>
          <button className="py-2 border border-gray-400 px-5 rounded-lg hover:bg-gray-100 text-[13px] mt-2">
            Login
          </button>
        </div>
      )}

    </div>
  );
}
