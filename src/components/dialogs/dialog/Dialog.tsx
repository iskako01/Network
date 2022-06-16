import React,{ FC} from "react";
import classes from "./Dialog.module.css";
import { Link } from "react-router-dom";
import {IdialogProps} from "../../../types/components/Idialog"

const Dialog: FC<IdialogProps> = ({id,name}) => {
  let path = "/dialogs/" + id;
  return (
    <div className={classes.dialog}>
      <Link to={path}>{name}</Link>
    </div>
  );
};

export default Dialog;
