import React from "react";
import { useState, useEffect, createContext, useContext } from "react";
const CountryContext = createContext();

export const useCountry = () => {
  return useContext(CountryContext);
};
export const CountryProvider = ({ children }) => {
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
    <CountryContext.Provider value={{ country, loading }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
