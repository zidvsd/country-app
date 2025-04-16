import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
import Router from "./routes/Router";
import SearchProvider from "./context/SearchProvider";
const App = () => {
  return (
    <BrowserRouter>
      <SearchProvider>
        <CountryProvider>
          <div className=" w-full font-nunito-sans ">
            <Router />
          </div>
        </CountryProvider>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
