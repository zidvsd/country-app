import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const ChildPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-12 mt-8">
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
      {loading ? (
        <h1 className="text-3xl font-bold dark:text-white absolute top-1/2 left-1/2 -translate-x-1/2">
          Loading...
        </h1>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChildPage;
