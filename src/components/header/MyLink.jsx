import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children, to, className, dataTip }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return `${isActive ? "text-primary font-bold" : ""} ${className}`;
      }}
      data-tip={dataTip}
    >
      {children}
    </NavLink>
  );
};

export default MyLink;

// {({ isActive }) => {
//         return `${
//           isActive ? "text-primary font-semibold" : "font-medium text-3xl"
//         }`;
//       }}
