import React from "react";
import { Link } from "react-router-dom";
const CountryCard = ({ img, country, population, region, capital }) => {
  return (
    <Link to={`/child`}>
      <div className="flex flex-col max-h-fit md:h-full md:max-h-auto dark:text-white items-start mx-auto w-[80%] md:w-[90%] lg:w-[100%] shadow-md rounded-bl-md rounded-br-md cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
        <img
          src={img}
          className="w-full object-cover h-1/2 rounded-tr-md rounded-tl-md"
          alt=""
        />
        {/* country details */}
        <div className="flex flex-col w-full h-1/2 pl-4 pt-4 pb-6 gap-y-2">
          {/* country name */}
          <h1 className="font-bold md:my-auto text-xl">{country}</h1>
          <p className="text-sm">
            <span className="font-semibold"> Population: </span>
            <span className="dark:text-dark-gray"> {population}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold"> Region: </span>
            <span className="dark:text-dark-gray">{region}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold"> Capital: </span>
            <span className="dark:text-dark-gray">{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
