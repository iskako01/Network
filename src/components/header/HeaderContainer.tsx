import React from "react";
import Header from "./Header";
import { logout } from "../../redux/redusers/authReduser";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";

export interface IheaderContainer {
  loading?: boolean;
  isAuth: boolean;
  login: string | null;
  logout: () => void;
}

const HeaderContainer: React.FC<IheaderContainer> = (props) => {
  return <Header {...props} />;
};

let mapStateToProps = (state: AppStateType) => {
  return {
    loading: state.auth.loading,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
