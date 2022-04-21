import React from "react";
import classes from "./Posts.module.css";
import Post from "../post/Post";

const Posts = (props) => {
  let postElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  return (
    <>
      <div className={classes.posts}>
        <div className={classes.special_post}>
          <div>
            <textarea className={classes}></textarea>
          </div>

          <div>
            <button>Add post</button>
          </div>
        </div>

        {postElements}
      </div>
    </>
  );
};

export default Posts;
