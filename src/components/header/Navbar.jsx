import React, { useContext } from "react";
import BoxContainer from "../../utilities/BoxContainer";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { FaRegUser } from "react-icons/fa6";
import MyLink from "./MyLink";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  // const navigate = useNavigate();
  const photoURL = () => {
    if (!loading) {
      if (user) {
        return true;
      }
    }
  };
  const isValidPhoto = photoURL();
  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <>
      <BoxContainer className="">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-11 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <MyLink to="/">Home</MyLink>
                </li>
                <li>
                  <MyLink to="findpartner">Find Partner</MyLink>
                </li>
                {user && (
                  <li>
                    <MyLink to="partnerprofile">Create Partner Profile</MyLink>
                  </li>
                )}
                {user && (
                  <li>
                    <MyLink to="myconnection">My Connection</MyLink>
                  </li>
                )}
              </ul>
            </div>
            <Link
              to="/"
              className="btn btn-ghost text-xl text-secondary font-black"
            >
              StudyMate
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <MyLink to="/">Home</MyLink>
              </li>
              <li>
                <MyLink to="findpartner">Find Partner</MyLink>
              </li>
              {user && (
                <li>
                  <MyLink to="partnerprofile">Create Partner Profile</MyLink>
                </li>
              )}
              {user && (
                <li>
                  <MyLink to={`myconnection`}>My Connection</MyLink>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            {!user ? (
              <div className="space-x-2">
                <Link to="login" className="btn">
                  Login
                </Link>
                <Link to="register" className="btn">
                  Register
                </Link>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {isValidPhoto ? (
                      user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <FaRegUser />
                      )
                    ) : (
                      "https://i.ibb.co.com/HDvMs58y/user-avatar-male-5.png"
                    )}
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="user-info" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <a onClick={handleSignOut}>Logout</a>
                  </li>
                </ul>
              </div>
            )}
            {user && <p className="ml-2"> {user.displayName}</p>}
          </div>
        </div>
      </BoxContainer>
    </>
  );
};

export default Navbar;
