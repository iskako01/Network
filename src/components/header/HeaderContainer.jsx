import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData, isLoading } from "../../redux/redusers/authReduser";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.isLoading(true);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);

        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(
            response.data.data.id,
            response.data.data.email,
            response.data.data.login
          );
        }
        this.props.isLoading(false);
      });
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
  setAuthUserData,
  isLoading,
})(HeaderContainer);
