import React from "react";
import Dialogs from "./Dialogs";

import {
  addMessageActionCreator,
  updateNewMeesageTextActionCreator,
} from "../../redux/redusers/dialogsReduser";

// messages={props.state.dialogsPage.messages}
// newTextMessage={props.state.dialogsPage.newTextMessage}
// dispatch={props.dispatch}

const DialogsContainer = (props) => {
  let state = props.store.getState();

  const sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  const updateMessage = (message) => {
    props.store.dispatch(updateNewMeesageTextActionCreator(message));
  };

  return (
    <Dialogs
      dialogsPage={state.dialogsPage}
      sendMessage={sendMessage}
      updateMessage={updateMessage}
    />
  );
};

export default DialogsContainer;
