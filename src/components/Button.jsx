import React from "react";
import { Link } from "react-router-dom";
const Button = () => {
  return (
    <>
      <Link to={"/"}>
        <button className="cursor-pointer hover:opacity-70 shadow-xl py-2 px-8 flex flex-row border-1 border-neutral-100 gap-x-2 rounded-md dark:text-white duration-300 transition ease-in-out dark:border-dark-blue dark:border-2">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            viewBox="0 -960 960 960"
            width="22px"
            className="fill-black dark:fill-white"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>{" "}
          Back
        </button>
      </Link>
    </>
  );
};

export default Button;
