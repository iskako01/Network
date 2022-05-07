import React from "react";
import Dialogs from "./Dialogs";

import {
  addMessageActionCreator,
  updateNewMeesageTextActionCreator,
} from "../../redux/redusers/dialogsReduser";
import StoreContext from "../../storeContex";

// messages={props.state.dialogsPage.messages}
// newTextMessage={props.state.dialogsPage.newTextMessage}
// dispatch={props.dispatch}

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const sendMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
        const updateMessage = (message) => {
          store.dispatch(updateNewMeesageTextActionCreator(message));
        };
        return (
          <Dialogs
            dialogsPage={state.dialogsPage}
            sendMessage={sendMessage}
            updateMessage={updateMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
