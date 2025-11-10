import React from "react";
import { Link } from "react-router";

const MyLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      className={({ isActive }) => {
        return `${isActive ? "text-primary font-semibold" : "font-medium"}`;
      }}
    >
      {children}
    </Link>
  );
};

export default MyLink;
