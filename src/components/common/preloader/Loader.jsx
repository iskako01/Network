import React from "react";
import loaderSvg from "../../../assets/loader.svg";
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loading}>
      <img src={loaderSvg} alt="" />
    </div>
  );
};
export default Loader;
