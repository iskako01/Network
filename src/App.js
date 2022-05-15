import React from "react";
import { Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
