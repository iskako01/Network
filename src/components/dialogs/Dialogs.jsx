import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";

const Dialogs = () => {
  let dialogs = [
    {
      id: "1",
      name: "Alisher",
    },
    {
      id: "2",
      name: "Toshka",
    },
  ];

  const messages = [
    {
      id: "1",
      message: "Hello",
    },
    {
      id: "2",
      message: "How are you?",
    },
  ];

  const dialogsElement = dialogs.map((d) => {
    return <Dialog name={d.name} id={d.id} />;
  });

  const messagesElement = messages.map((m) => {
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
