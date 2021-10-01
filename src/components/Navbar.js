import React from "react";
import { withRouter } from "react-router";
import NavBlack from "./NavBar/NavBlack";
import NavWhite from "./NavBar/NavWhite";

const Navbar = ({ location: { pathname } }) =>
  pathname === "/" ? (
    <NavBlack pathname={pathname} />
  ) : (
    <NavWhite pathname={pathname} />
  );

export default withRouter(Navbar);
