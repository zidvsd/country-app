import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const normalizeText = (text) => {
  return text
    .normalize("NFD") // Split accented letters into parts
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^\w\s-]/g, "") // Remove special characters except dash/underscore/space
    .trim()
    .replace(/\s+/g, "-") // Remove multiple spaces
    .toLowerCase();
};

const CountryInfo = ({ country }) => {
  const [abbreviationMap, setAbbreviationMap] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch("/country-abbreviations.json");
        const data = await res.json();
        setAbbreviationMap(data);
      } catch (error) {
        console.log("Unable to fetch country abbreviation", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="flex mt-18 flex-col  dark:text-white lg:flex-row lg:gap-x-24">
      <img
        src={country.flags.svg}
        className="object-contain w-full lg:w-1/2 self-start"
        alt={`${country.name} flag`}
      />

      <div className="flex flex-col  lg:flex-col space-y-12 w-full lg:w-1/2">
        <h1 className="text-2xl font-bold mt-12 lg:mt-0">{country.name}</h1>
        <div className="flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0">
          <div className="space-y-2 flex flex-col ">
            <p className="font-semibold">
              Native Name:{" "}
              <span className="text-dark-gray font-normal">
                {country.nativeName}
              </span>
            </p>
            <p className="font-semibold">
              Population:{" "}
              <span className="text-dark-gray font-normal">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className="font-semibold">
              Region:{" "}
              <span className="text-dark-gray font-normal">
                {country.region}
              </span>
            </p>
            <p className="font-semibold">
              Sub Region:{" "}
              <span className="text-dark-gray font-normal">
                {country.subregion}
              </span>
            </p>
            <p className="font-semibold">
              Capital:{" "}
              <span className="text-dark-gray font-normal">
                {country.capital?.length > 0
                  ? country.capital
                  : "No Capital Found."}
              </span>
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">
              Top Level Domain:{" "}
              {country.topLevelDomain.map((domain, index) => (
                <span key={index} className="text-dark-gray font-normal">
                  {domain}
                </span>
              ))}
            </p>
            <p className="font-semibold">
              Currencies:{" "}
              <span className="text-dark-gray font-normal">
                {country.currencies?.length > 0
                  ? country.currencies.map((currency, index) => (
                      <span key={index}>
                        {currency.name}
                        {index < country.currencies.length - 1 ? ", " : ""}
                      </span>
                    ))
                  : "No Currencies found."}
              </span>
            </p>

            <p className="font-semibold">
              Languages:{" "}
              <span className="text-dark-gray font-normal">
                {country.languages.map((language) => language.name).join(", ")}
              </span>
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Border Countries:</p>
          <div className="flex flex-wrap gap-4 mt-4 items-center dark:text-shadow-white font-normal">
            {country.borders?.length > 0
              ? country.borders.map((border) => {
                  const fullBorderName = abbreviationMap[border];
                  const linkPath = fullBorderName
                    ? normalizeText(fullBorderName)
                    : border;

                  return (
                    <Link to={`/country/${linkPath}`} key={border}>
                      <button className="cursor-pointer hover:opacity-50 transition-all duration-300 ease-in-out px-8 py-2 dark:bg-dark-blue bg-light-gray text-black dark:text-white rounded shadow-md">
                        {abbreviationMap[border] || border}
                      </button>
                    </Link>
                  );
                })
              : "No borders found."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
