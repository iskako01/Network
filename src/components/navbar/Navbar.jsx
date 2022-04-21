import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.items}>
        <div className={classes.item}>
          <Link to="/profile" activeClassName={classes.active}>
            Profile
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/dialogs/" activeClassName={classes.active}>
            Messages
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/news" activeClassName={classes.active}>
            News
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/music" activeClassName={classes.active}>
            Music
          </Link>
        </div>
        <div className={classes.item}>
          <Link to="/settings" activeClassName={classes.active}>
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
