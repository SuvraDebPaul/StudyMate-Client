import React from "react";
import errorImg from "../assets/404.jpg";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <img src={errorImg} alt="" className="h-[80dvh]" />
        <p className="text-xl text-gray-500 my-2">
          The page you are looking for is not available.
        </p>
        <Link to="/">
          <button
            className="btn mb-10 bg-linear-to-br from-[#632ee3] to-[#9f62f2] 
               text-white px-8"
          >
            Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
