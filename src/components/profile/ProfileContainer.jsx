import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { isLoading } from "../../redux/redusers/usersReduser";
import { getUserProfile } from "../../redux/redusers/profileReduser";
import {
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getUserProfile(userId);
  }
  render() {
    if (!this.props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <Profile {...this.props} userProfile={this.props.userProfile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.usersPage.loading,
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
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
  getUserProfile,
})(withRouter(ProfileContainer));
