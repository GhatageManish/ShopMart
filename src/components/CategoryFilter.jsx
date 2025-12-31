import { initialProducts } from "./data/product";
import { Tag } from "lucide-react";

const availableCategory = [
  "All",
  ...new Set(initialProducts.map((p) => p.category))
];

function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-3 border-b border-gray-800 pb-4 items-center">
      <Tag className="text-gray-400" />

      {availableCategory.map((category) => (
        <button
          key={category}
          className="px-3 py-1 rounded-lg bg-gray-800 text-white hover:bg-orange-500 transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;