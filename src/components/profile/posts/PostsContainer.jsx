import React from "react";
import Posts from "./Posts";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/redusers/profileReduser";
import StoreContext from "../../../storeContex";

const PostsContainer = (props) => {
  //

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const updateNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        return (
          <Posts
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            posts={state.profilePage.posts}
            newTextPost={state.profilePage.newTextPost}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
