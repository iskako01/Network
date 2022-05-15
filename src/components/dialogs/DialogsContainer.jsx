import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

import {
  addMessageActionCreator,
  updateNewMeesageTextActionCreator,
} from "../../redux/redusers/dialogsReduser";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
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

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(Dialogs));

export default DialogsContainer;
