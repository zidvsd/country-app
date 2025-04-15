import React from "react";
import { useState } from "react";
import CountryInfo from "../components/CountryInfo";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useCountry } from "../context/CountryContext";
const normalizeText = (country) => {
  return country
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
};
const ChildPage = () => {
  const { id } = useParams();
  const { country, loading: countryLoading } = useCountry();
  const [loading, setLoading] = useState(false);

  if (loading || countryLoading) {
    return (
      <h1 className="text-3xl font-bold dark:text-white absolute top-1/2 left-1/2 -translate-x-1/2">
        Loading...
      </h1>
    );
  }
  const selectedCountry = country.find(
    (item) => normalizeText(item.name) === id,
  );
  if (!selectedCountry) {
    return <p className="text-center text-xl mt-10">Country not found</p>;
  }
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-12 mt-8">
      <Button />
      <CountryInfo country={selectedCountry} />
    </div>
  );
};

export default ChildPage;
