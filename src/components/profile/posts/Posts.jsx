import React from "react";
import classes from "./Posts.module.css";
import Post from "../post/Post";

const Posts = () => {
  return (
    <>
      <div className={classes.posts}>
        <Post message="Hi, What's up!" />
      </div>
    </>
  );
};

export default Posts;
