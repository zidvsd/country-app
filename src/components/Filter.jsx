import React, { useState } from "react";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
    if (region === "All") {
      setSelectedRegion("Filter by Region");
    } else {
      selectedRegion(region);
    }
  };
  const countries = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div className="inline-block text-left font-semibold">
      <button
        onClick={toggleDropdown}
        className="cursor-pointer px-4 py-2 bg-white text-black rounded-md focus:outline-none shadow-md w-auto dark:bg-dark-blue dark:text-white"
      >
        {selectedRegion}
      </button>

      {isOpen && (
        <div className="w-auto mt-2  dark:text-white  bg-dark-blue shadow-md   ">
          <ul className="rounded-md">
            {countries.map((region, index) => (
              <li key={index}>
                <a
                  onClick={() => handleRegionSelect(region)}
                  className="block px-4 py-2 bg-white dark:bg-dark-blue dark:text-white hover:bg-neutral-500 cursor-pointer"
                >
                  {region}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
