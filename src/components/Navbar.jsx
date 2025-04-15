import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="dark:bg-dark-blue shadow-md border-b border-neutral-300 dark:border-none">
      <div className="p-4 md:p-6 lg:p-8 container mx-auto w-full  justify-between flex flex-row relative">
        <Link to={"/"}>
          <h1 className="cursor-pointer hover:scale-110 transition-scale ease-in-out duration-300 text-3xl font-bold dark:text-white">
            Where in the world{" "}
          </h1>
        </Link>
        {/* dark mode button component */}
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
