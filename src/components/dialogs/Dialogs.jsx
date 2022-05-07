import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  const dialogsElement = props.dialogsPage.dialogs.map((d) => {
    return <Dialog name={d.name} id={d.id} />;
  });

  const messagesElement = props.dialogsPage.messages.map((m) => {
    return <Message message={m.message} />;
  });

  const onSendMessage = () => {
    props.sendMessage();
  };
  const updateMessage = (e) => {
    let message = e.target.value;
    props.updateMessage(message);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>{dialogsElement}</div>
      <div className={classes.messages}>
        {messagesElement}
        <textarea
          onChange={updateMessage}
          value={props.dialogsPage.newTextMessage}
        ></textarea>
        <div>
          <button onClick={onSendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
