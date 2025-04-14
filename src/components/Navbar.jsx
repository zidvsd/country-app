import React from "react";
import DarkModeToggle from "./DarkModeToggle";
const Navbar = () => {
  return (
    <div className="dark:bg-dark-blue shadow-md border-b border-neutral-300 dark:border-none">
      <div className="p-4 md:p-6 lg:p-8 container mx-auto w-full  justify-between flex flex-row relative">
        <h1 className="text-3xl font-bold dark:text-white">
          Where in the world{" "}
        </h1>
        {/* dark mode button component */}
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
