import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
const App = () => {
  return (
    <BrowserRouter>
      <div className=" w-full font-nunito-sans ">
        <Router />
      </div>
    </BrowserRouter>
  );
};

export default App;
