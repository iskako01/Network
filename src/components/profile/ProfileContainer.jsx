import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { isLoading } from "../../redux/redusers/usersReduser";
import {
  getUserProfile,
  getStatusProfile,
  updateStatusProfile,
} from "../../redux/redusers/profileReduser";
import { withRouter } from "../../hoc/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileContainer = (props) => {
  useEffect(() => {
    let userId = props.match
      ? props.match.params.userId
      : props.authorizatedUserId;
    props.getUserProfile(userId);
    props.getStatusProfile(userId);
  }, []);

  return (
    <Profile
      {...props}
      userProfile={props.userProfile}
      status={props.status}
      updateStatusProfile={props.updateStatusProfile}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.usersPage.loading,
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizatedUserId: state.auth.userId,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatusProfile,
    updateStatusProfile,
  }),
  withAuthRedirect,
  withRouter
)(ProfileContainer);
