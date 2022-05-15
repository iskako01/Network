import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/redusers/authReduser";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
    // this.props.isLoading(true);
    // authApi.isAuth().then((data) => {
    //   if (data.resultCode === 0) {
    //     this.props.setAuthUserData(
    //       data.data.id,
    //       data.data.email,
    //       data.data.login
    //     );
    //   }
    //   this.props.isLoading(false);
    // });
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
})(HeaderContainer);
