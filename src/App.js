import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./components/profile/ProfileContainer";
import News from "./components/news/News";
import Music from "./components/music/Music";
import UsersContainer from "./components/users/UsersContainer";
import Settings from "./components/settings/Settings";
import { connect } from "react-redux";
import { initializeApp } from "./redux/redusers/appReduser";
import { withRouter } from "./hoc/withRouter";
import { compose } from "redux";
import Loader from "./components/common/preloader/Loader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
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
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />

            <Route
              path="/*"
              element={
                <div
                  style={{
                    margin: "50px auto",
                    textAlign: "center",
                    fontSize: "30px",
                  }}
                >
                  404 Not found
                </div>
              }
            />
            <Route exact path="/" element={<Navigate to="/profile" />} />
          </Routes>
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
