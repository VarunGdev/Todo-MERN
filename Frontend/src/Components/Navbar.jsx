import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-1 flex items-center">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:rotate-12 transition-transform">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight hidden sm:block">
                Task<span className="text-orange-500">Flow</span>
              </span>
            </div>
          </div>


          <div className="hidden md:flex items-center justify-center space-x-10 flex-1">
            {["Home", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white font-medium transition-all duration-300 relative group text-sm uppercase tracking-widest"
              >
                {item}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>


          <div className="flex-1 hidden md:flex justify-end">
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-64 border-b border-white/10" : "max-h-0"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-4 text-center">
          <a
            href="#home"
            className="block text-gray-300 text-lg py-2 hover:text-orange-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-300 text-lg py-2 hover:text-orange-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block text-gray-300 text-lg py-2 hover:text-orange-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}