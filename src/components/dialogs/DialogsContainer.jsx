import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

import { addMessage } from "../../redux/redusers/dialogsReduser.ts";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage }),
  withAuthRedirect
)(Dialogs);
