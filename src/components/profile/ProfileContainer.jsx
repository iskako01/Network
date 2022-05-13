import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "../common/preloader/Loader";
import { isLoading } from "../../redux/redusers/usersReduser";
import { setUserProfile } from "../../redux/redusers/profileReduser";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // this.props.isLoading(true);
    let userId = this.props.router.params.userId;
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

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
  isLoading,
  setUserProfile,
})(withRouter(ProfileContainer));