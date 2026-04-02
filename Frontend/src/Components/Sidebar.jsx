import { useState } from "react";

export default function Sidebar({ onCreate }) {
  return (
    <>
      <div
        id="hs-sidebar-footer"
        className="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 w-64 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 z-60 bg-white dark:bg-neutral-800 border-e border-gray-200 dark:border-neutral-700"
        role="dialog"
        tabIndex="-1"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          <header className="p-4 flex justify-between items-center gap-x-2">
            <a
              className="flex-none font-semibold text-xl text-gray-800 dark:text-white focus:outline-hidden focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              Tasks
            </a>
          </header>

          <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 p-2 space-y-3">
            <button className="w-full flex items-center gap-x-3.5 py-3 px-4 bg-gray-100 dark:bg-neutral-700 text-sm text-gray-800 dark:text-neutral-200 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Dashboard
            </button>
            <button
              onClick={onCreate}
              className="w-full flex items-center gap-x-3.5 py-3 px-4 bg-gray-100 dark:bg-neutral-700 text-sm text-gray-800 dark:text-neutral-200 rounded-lg hover:bg-gray-200 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Create
            </button>
          </nav>
        </div>
      </div>
    
    </>
  );
}