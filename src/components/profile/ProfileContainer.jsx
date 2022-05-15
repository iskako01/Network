import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { isLoading } from "../../redux/redusers/usersReduser";
import { getUserProfile } from "../../redux/redusers/profileReduser";
import { withRouter } from "../../hoc/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} userProfile={this.props.userProfile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.usersPage.loading,
    userProfile: state.profilePage.userProfile,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
