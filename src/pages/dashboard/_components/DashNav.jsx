import React, { useContext } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import ThemeToggle from "../../../components/header/ThemeToggle";

const DashNav = () => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  // const navigate = useNavigate();
  const photoURL = () => {
    if (!loading) {
      if (user) {
        return true;
      }
    }
  };
  const isValidPhoto = photoURL();

  let pathName = "Dashboard";
  if (location.pathname === "/dashboard") {
    pathName = "Dashboard";
  } else if (location.pathname === "/myconnection") {
    pathName = "My Connections";
  } else if (location.pathname === "/profile") {
    pathName = "User Profile";
  } else if (location.pathname === "/partnerprofile") {
    pathName = "Create Partner Profile";
  }

  return (
    <div className="flex justify-between items-center w-full bg-base-300">
      <nav className="navbar ">
        <label
          htmlFor="my-drawer-4"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          {/* Sidebar toggle icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            className="my-1.5 inline-block size-4"
          >
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M9 4v16"></path>
            <path d="M14 10l2 2l-2 2"></path>
          </svg>
        </label>
        <div className="px-4">{pathName}</div>
      </nav>
      {/* Theme Toggle Component */}
      <ThemeToggle />
      <div className="w-12 rounded-full mx-10">
        {isValidPhoto ? (
          user.photoURL ? (
            <img
              src={user.photoURL}
              alt=""
              className="w-10 h-10 rounded-full"
              referrerPolicy="no-referrer"
            />
          ) : (
            <FaRegUser />
          )
        ) : (
          "https://i.ibb.co.com/HDvMs58y/user-avatar-male-5.png"
        )}
      </div>
    </div>
  );
};

export default DashNav;
