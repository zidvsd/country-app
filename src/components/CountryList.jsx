import React from "react";
import { useState, useEffect } from "react";
import { useCountry } from "../context/CountryContext";
import { useSearch } from "../context/SearchProvider";
import CountryCard from "./CountryCard";
const CountryList = ({ selectedRegion, setSelectedRegion }) => {
  const { inputValue } = useSearch();
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { country, loading } = useCountry();
  const [debouncedInput, setDebouncedInput] = useState(inputValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(inputValue);
    }, 300); // 300ms debounce time (can be adjusted)

    // Cleanup function to clear the timeout if the input changes before the timeout
    return () => clearTimeout(timer);
  }, [inputValue]); // This effect runs every time `inputValue` changes

  // Your existing `useEffect` for filtering
  useEffect(() => {
    if (country.length > 0) {
      let filtered = [...country];

      // Apply region filter
      if (selectedRegion && selectedRegion !== "All" && selectedRegion !== "") {
        filtered = filtered.filter((item) => item.region === selectedRegion);
      }

      // Apply search input filter (debounced input)
      if (debouncedInput) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(debouncedInput.toLowerCase()),
        );
      }

      setFilteredCountries(filtered);
    }
  }, [debouncedInput, selectedRegion, country]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-10 px-12 md:px-0 ">
      {/* country individual div */}
      {loading ? (
        <h1 className="font-bold text-3xl">Loading...</h1>
      ) : (
        filteredCountries.map((item, index) => (
          <CountryCard
            key={index}
            img={item.flags.svg}
            country={item.name}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        ))
      )}
    </div>
  );
};

export default CountryList;
