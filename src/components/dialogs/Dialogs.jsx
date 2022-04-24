import React from "react";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import classes from "./Dialogs.module.css";
import {
  addMessageActionCreator,
  updateNewMeesageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  const dialogsElement = props.dialogs.map((d) => {
    return <Dialog name={d.name} id={d.id} />;
  });

  const messagesElement = props.messages.map((m) => {
    return <Message message={m.message} />;
  });

  let newMessageElement = React.createRef();

  const sendMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  const updateMessage = (e) => {
    let message = e.target.value;
    props.dispatch(updateNewMeesageTextActionCreator(message));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>{dialogsElement}</div>
      <div className={classes.messages}>
        {messagesElement}
        <textarea
          onChange={updateMessage}
          value={props.newTextMessage}
        ></textarea>
        <div>
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
