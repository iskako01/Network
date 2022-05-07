import React from "react";
import Posts from "./Posts";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/redusers/profileReduser";

const PostsContainer = (props) => {
  let state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const updateNewPostText = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <>
      <Posts
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        posts={state.profilePage.posts}
        newTextPost={state.profilePage.newTextPost}
      />
    </>
  );
};

export default PostsContainer;
