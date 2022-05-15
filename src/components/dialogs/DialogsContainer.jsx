import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import {
  addMessage,
  updateNewMeesageText,
} from "../../redux/redusers/dialogsReduser";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage, updateNewMeesageText }),
  withAuthRedirect
)(Dialogs);
