import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
import Router from "./routes/Router";
const App = () => {
  return (
    <BrowserRouter>
      <CountryProvider>
        <div className=" w-full font-nunito-sans ">
          <Router />
        </div>
      </CountryProvider>
    </BrowserRouter>
  );
};

export default App;
