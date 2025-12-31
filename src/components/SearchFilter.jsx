import { useState } from "react";
import { Search } from "lucide-react";

function SearchFilter() {
  const [query, setQuery] = useState("");

  return (
    <div className="mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border border-gray-800">
      <div
        className="flex items-center border border-gray-700 rounded-xl overflow-hidden
                   focus-within:ring-4 focus-within:ring-orange-600/50
                   transition duration-300 bg-gray-800"
      >
        <Search className="w-5 h-5 ml-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 bg-transparent text-white outline-none"
        />
      </div>
    </div>
  );
}

export default SearchFilter;