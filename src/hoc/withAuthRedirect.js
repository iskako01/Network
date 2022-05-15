import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
  isAuth: state.isAuth,
});

const withAuthRedirect = (Component) => {
  const AuthRedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to="/login" />;
    }
    return <Component {...props} />;
  };

  return connect(mapStateToProps)(AuthRedirectComponent);
};

export default withAuthRedirect;
