import React from "react";
import { useState, useEffect } from "react";
import { useSearch } from "../context/SearchProvider";
const SearchInput = () => {
  const { inputValue, setInputValue, formatText } = useSearch();
  const handleChange = (event) => {
    const formattedText = formatText(event.target.value);
    setInputValue(formattedText);
  };
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  return (
    <>
      <label className="bg-white dark:bg-dark-blue shadow-md input w-full md:w-1/2 flex flex-row items-center justify-start  gap-x-4 dark:text-white rounded-md px-4  ">
        <svg
          className="h-[1em] opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          value={inputValue}
          onChange={handleChange}
          type="search"
          className="w-full  mr-auto py-3 focus:outline-none focus:ring-none dark:text-white"
          required
          placeholder="Search for a country..."
        />
      </label>
    </>
  );
};

export default SearchInput;
