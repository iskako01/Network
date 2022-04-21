import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  const dialogsElement = props.dialogs.map((d) => {
    return <Dialog name={d.name} id={d.id} />;
  });

  const messagesElement = props.messages.map((m) => {
    return <Message message={m.message} />;
  });

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>{dialogsElement}</div>
      <div className={classes.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
