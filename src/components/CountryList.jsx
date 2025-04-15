import React from "react";
import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
const CountryList = () => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        console.log(data);
        setCountry(data);
      } catch (error) {
        console.log("Unable to fetch api" + error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-10 px-12 md:px-4 lg:px-0 ">
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
