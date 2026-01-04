import React, { useContext } from "react";
import { FiHome } from "react-icons/fi";
import { MdConnectWithoutContact } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import MyLink from "../../../components/header/MyLink";
import { AuthContext } from "../../../contexts/AuthContext";

const Sidebar = () => {
  const { signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser();
  };
  return (
    <ul className="menu w-full grow">
      {/* List item */}
      <li>
        <MyLink
          to={"/"}
          className={
            "text-secondary font-black text-xl h-14 is-drawer-close:tooltip is-drawer-close:tooltip-right"
          }
          dataTip={"Home"}
        >
          <span className="is-drawer-open:hidden">
            <FiHome size={18}></FiHome>
          </span>
          <span className="is-drawer-close:hidden">StydyMate</span>
        </MyLink>
      </li>
      <li className="my-2">
        <MyLink
          to={"/dashboard"}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          dataTip="Dashboard"
        >
          <LuLayoutDashboard size={18}></LuLayoutDashboard>

          <span className="is-drawer-close:hidden">Dashboard</span>
        </MyLink>
      </li>

      {/* List item */}
      <li className="my-2">
        <MyLink
          to={"/partnerprofile"}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          dataTip="Create Partner Profile"
        >
          <MdOutlineCreateNewFolder size={20}></MdOutlineCreateNewFolder>
          <span className="is-drawer-close:hidden">Create Profile</span>
        </MyLink>
      </li>
      {/* List item */}
      <li className="my-2">
        <MyLink
          to={"/myconnection"}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          dataTip="My Connections"
        >
          <MdConnectWithoutContact size={20}></MdConnectWithoutContact>
          <span className="is-drawer-close:hidden">My Connections</span>
        </MyLink>
      </li>
      {/* List item */}
      <hr className="mt-auto" />
      <li>
        <MyLink
          to={"/profile"}
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          dataTip="User Profile"
        >
          <CgProfile size={18}></CgProfile>
          <span className="is-drawer-close:hidden">User Profile</span>
        </MyLink>
      </li>
      {/* List item */}
      <li className="my-2">
        <button
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Logout"
          onClick={handleSignOut}
        >
          {/* Logout icon */}
          <IoIosLogOut size={18}></IoIosLogOut>
          <span className="is-drawer-close:hidden">Logout</span>
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
