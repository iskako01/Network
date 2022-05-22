import React from "react";
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

class ProfileContainer extends React.Component {
  componentDidMount() {
    // console.log(this.props.authorizatedUserId);
    let userId = this.props.match
      ? this.props.match.params.userId
      : this.props.authorizatedUserId;
    this.props.getUserProfile(userId);
    this.props.getStatusProfile(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        userProfile={this.props.userProfile}
        status={this.props.status}
        updateStatusProfile={this.props.updateStatusProfile}
      />
    );
  }
}

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
