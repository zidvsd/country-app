import React from "react";
import { useContext, createContext, useState } from "react";
const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};
export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const formatText = (str) => {
    return str.charAt(0).toLowerCase().trim() + str.slice(1).toLowerCase();
  };
  return (
    <SearchContext.Provider value={{ inputValue, setInputValue, formatText }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
