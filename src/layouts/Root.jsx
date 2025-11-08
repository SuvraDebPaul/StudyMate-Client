import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <>
      <header className="bg-base-100 shadow-sm">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Root;
