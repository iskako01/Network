import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={classes}>
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
