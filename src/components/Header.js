import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      {/* <Outlet /> */}
      Header
      <Nav />
    </header>
  );
};

export default Header;
