import React from "react";
import { useState, useEffect } from "react";
import { useCountry } from "../context/CountryContext";
import CountryCard from "./CountryCard";
const CountryList = () => {
  const { country, loading } = useCountry();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-10 px-12 md:px-0 ">
      {/* country individual div */}
      {loading ? (
        <h1 className="font-bold text-3xl">Loading...</h1>
      ) : (
        country.map((item, index) => (
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
