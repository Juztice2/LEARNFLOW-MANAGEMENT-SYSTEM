import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchFilter({
  search,
  setSearch,
  activeFilter,
  setActiveFilter,
}) {
  const filters = ["All", "Coding", "Programming"];

  return (
    <div className="flex flex-col font-poppins lg:flex-row justify-between items-center gap-6">
      {/* Search */}
      <div className="flex items-center w-full lg:w-[420px] border border-gray-200 rounded-xl overflow-hidden bg-white">
        <Search size={18} className="ml-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-3 outline-none"
        />

        <button className="px-4">
          <SlidersHorizontal size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setActiveFilter(item)}
            className={`px-6 py-2 rounded-full text-sm transition ${
              activeFilter === item
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {item}
          </button>
        ))}

        <button className="hidden md:block text-2xl text-gray-500">•••</button>
      </div>
    </div>
  );
}