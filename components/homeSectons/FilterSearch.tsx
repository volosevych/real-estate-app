"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FilterSearch = () => {
  const [isAreaSelected, setIsAreaSelected] = useState(false);

  return (
    <section className="relative z-20 w-full flex justify-center">
      <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-6 w-[90%] md:w-[70%] lg:w-[60%] flex flex-col md:flex-row gap-4">
        {/* Choose Area Filter */}
        <div
          className={`relative w-full md:w-1/3 border rounded-md p-3 flex items-center ${
            isAreaSelected ? "border-[--red-active]" : "border-[--secondary]/50"
          }`}
        >
          <select
            className="w-full appearance-none bg-transparent outline-none pr-8"
            onChange={(e) =>
              setIsAreaSelected(e.target.value !== "Choose Area")
            }
          >
            <option>Choose Area</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Miami</option>
          </select>
          {/* Down Arrow Icon */}
          <ChevronDown className="absolute right-3 text-gray-500" size={18} />
        </div>

        {/* Property Type Filter */}
        <div className="relative w-full md:w-1/3 border border-[--secondary]/50 hover:border-[--red-active] rounded-md p-3 flex items-center">
          <select className="w-full appearance-none bg-transparent outline-none pr-8">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
          </select>
          <ChevronDown className="absolute right-3 text-gray-500" size={18} />
        </div>

        {/* Search Button */}
        <button className="bg-[--red-active] text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
          Search
        </button>
      </div>
    </section>
  );
};

export default FilterSearch;
