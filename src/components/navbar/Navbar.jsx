import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeClass = (navData) =>
    navData.isActive ? classes.active : classes.item;
  return (
    <nav className={classes.nav}>
      <div className={classes.items}>
        <div className={classes.item}>
          <NavLink className={activeClass} to="/profile">
            Profile
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink className={activeClass} to="/dialogs">
            Messages
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink className={activeClass} to="/news">
            News
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink className={activeClass} to="/music">
            Music
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink className={activeClass} to="/users">
            Users
          </NavLink>
        </div>
        <div className={classes.item}>
          <NavLink className={activeClass} to="/settings">
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
