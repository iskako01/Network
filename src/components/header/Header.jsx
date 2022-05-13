import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://flyclipart.com/thumb2/man-face-logo-beauty-free-logo-images-beauty-free-logo-design-743659.png" />
      <div className={classes.loginBlog}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
