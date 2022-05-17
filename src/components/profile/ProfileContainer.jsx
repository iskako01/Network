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
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = 23965;
    }
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
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatusProfile,
    updateStatusProfile,
  }),
  withRouter
)(ProfileContainer);
