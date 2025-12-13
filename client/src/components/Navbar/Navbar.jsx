export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-15 py-3 max-w-8xl mx-auto w-full border-b border-white/5 navBG">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white">▶</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          VidSum
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-gray-400 font-medium">
        <a href="#" className="hover:text-white transition-colors">
          Dashboard
        </a>
        <a href="#" className="hover:text-white transition-colors">
          🔖 Saved
        </a>
      </div>
      <button className="px-5 py-2 rounded-full border border-gray-700 hover:bg-white/5 text-white text-sm font-medium">
        ➔ Login
      </button>
    </nav>
  );
}
