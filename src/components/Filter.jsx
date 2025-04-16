import React, { useState } from "react";
import { useEffect } from "react";
const Filter = ({ isOpen, setIsOpen, selectedRegion, setSelectedRegion }) => {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRegionSelect = (region) => {
    if (region === "All") {
      setSelectedRegion("All");
    } else {
      setSelectedRegion(region);
    }
    setIsOpen(false);
  };

  const countries = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="inline-block text-left font-semibold">
      <button
        onClick={toggleDropdown}
        className=" flex flex-row gap-x-4 cursor-pointer px-4 py-2 bg-white text-black rounded-md focus:outline-none shadow-md w-auto dark:bg-dark-blue dark:text-white"
      >
        {selectedRegion}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          className="dark:fill-white fill-black"
        >
          <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
        </svg>
      </button>

      {isOpen && (
        <div className="w-auto mt-2  dark:text-white  bg-dark-blue shadow-md   ">
          <ul className="rounded-md relative">
            {countries.map((region, index) => (
              <li key={index}>
                <a
                  onClick={() => handleRegionSelect(region)}
                  className="px-4 py-2 bg-white dark:bg-dark-blue dark:text-white hover:bg-neutral-500 cursor-pointer block"
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
