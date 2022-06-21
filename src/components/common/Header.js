import React from "react";
import { NavLink } from "react-router-dom";

export const activeStyle = { color: "#F15B5A" };
const Header = () => {
  return (
    <nav className="navbar is-fixed-top is-dark">
      <div className="navbar-brand">
        <NavLink
          to="/"
          activeStyle={activeStyle}
          exact
          className="navbar-item ml-5 is-size-4"
        >
          Home
        </NavLink>
        {" | "}
        <NavLink
          to="/courses"
          activeStyle={activeStyle}
          className="navbar-item is-size-4"
        >
          Courses
        </NavLink>
        {" | "}
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          className="navbar-item is-size-4"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
