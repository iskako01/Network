import React, { FC }from "react";
import classes from "./Message.module.css";
import {ImessageProps} from "../../../types/components/Imessage"


const Message: FC<ImessageProps>= ({message}) => {
  return (
    <div className={classes}>
      <p>{message}</p>
    </div>
  );
};

export default Message;
