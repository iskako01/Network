import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "../common/preloader/Loader";
import { isLoading } from "../../redux/redusers/usersReduser";
import { setUserProfile } from "../../redux/redusers/profileReduser";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // this.props.isLoading(true);
    let userId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        console.log(response.data);
        this.props.setUserProfile(response.data);
      });
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
export default connect(mapStateToProps, {
  isLoading,
  setUserProfile,
})(ProfileContainer);
