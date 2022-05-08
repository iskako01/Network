import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import UsersContainer from "./components/users/UsersContainer";
import Settings from "./components/settings/Settings";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
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
