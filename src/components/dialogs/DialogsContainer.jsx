import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

import {
  addMessageActionCreator,
  updateNewMeesageTextActionCreator,
} from "../../redux/redusers/dialogsReduser";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessage: (message) => {
      dispatch(updateNewMeesageTextActionCreator(message));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
