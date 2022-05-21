import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData, logout } from "../../redux/redusers/authReduser";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, {
  getAuthUserData,
  logout,
})(HeaderContainer);
