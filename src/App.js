import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./redux/redusers/appReduser.ts";
import { withRouter } from "./hoc/withRouter";
import { compose } from "redux";
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/common/preloader/Loader";
const DialogsContainer = React.lazy(() =>
  import("./components/dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/profile/ProfileContainer")
);
const Music = React.lazy(() => import("./components/music/Music"));
const News = React.lazy(() => import("./components/news/News"));
const Settings = React.lazy(() => import("./components/settings/Settings"));
const Login = React.lazy(() => import("./components/login/Login"));
const UsersContainer = React.lazy(() =>
  import("./components/users/UsersContainer")
);

class App extends React.Component {
  catchAllUnhandledError = (promiseRejectionEvent) => {
    alert("Some error occurred");
  };
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledError
    );
  }
  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-content">
          <Suspense fallback={Loader}>
            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/settings" element={<Settings />} />

              <Route
                path="/*"
                element={<div className="error404">404 Not found</div>}
              />
              <Route exact path="/" element={<Navigate to="/profile" />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  connect(mapStateToProps, {
    initializeApp,
  }),
  withRouter
)(App);
