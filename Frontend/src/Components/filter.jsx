import { useState, useRef, useEffect } from "react";

export default function SearchFilter({ searchTerm = "", statusFilter = "all", onFilter }) {
  const [query, setQuery] = useState(searchTerm);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    setQuery(searchTerm);
  }, [searchTerm]);

  const handleSearch = () => {
    onFilter(query, statusFilter);
  };

  const handleStatusChange = (status) => {
    onFilter(query, status.toLowerCase());
    setIsDropdownOpen(false);
  };

  return (
    <form
      className="max-w-2xl mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <div className="flex items-start shadow-xs rounded-base -space-x-0.5 relative">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen((open) => !open)}
            className="px-4 py-2.5 border"
          >
            {statusFilter}
          </button>

          {isDropdownOpen && (
            <div className="absolute left-0 mt-1 w-44 bg-white border rounded-md shadow-xl z-50">
              <ul className="p-2 text-sm">
                {["All", "Completed", "Pending"].map((status) => (
                  <li key={status}>
                    <button
                      type="button"
                      onClick={() => handleStatusChange(status)}
                      className="block w-full text-left p-2 hover:bg-gray-100"
                    >
                      {status}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <input
          type="search"
          className="px-3 py-2.5 border w-full"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          type="submit"
          className="px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </div>
    </form>
  );
}