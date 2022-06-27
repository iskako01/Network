import React from "react";
import Posts from "./Posts";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";

import { addPost } from "../../../redux/redusers/profileReduser";

const mapStateToProps = (state:AppStateType) => {
  return {
    posts: state.profilePage.posts,
  };
};

const PostsContainer = connect(mapStateToProps, { addPost })(Posts);

export default PostsContainer;
