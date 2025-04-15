import React from "react";
import SearchInput from "../components/SearchInput";
import Filter from "../components/Filter";
import CountryList from "../components/CountryList";
const HomePage = () => {
  return (
    <>
      <div className="bg-very-light-gray dark:bg-very-dark-blue">
        <div className="w-full container mx-auto p-4 md:p-6 lg:p-8  ">
          <div className="flex flex-col gap-y-4 md:flex-row justify-between items-start mt-12 w-full">
            <SearchInput />
            <Filter />
          </div>
          <div className="mt-12">
            <CountryList />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
