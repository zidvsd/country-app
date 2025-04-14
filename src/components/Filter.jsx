import React, { useState } from "react";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-white text-black rounded-md focus:outline-none"
      >
        Filter by Region
      </button>

      {isOpen && (
        <div className="w-40 mt-2 bg-white shadow-md rounded-md border border-gray-200">
          <ul>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Item 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Item 2
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
