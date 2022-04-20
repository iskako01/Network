import React from "react";
import classes from "./Posts.module.css";
import Post from "../post/Post";

const Posts = () => {
  const posts = [
    {
      id: "1",
      message: "Hi, What's up!",
      likesCount: 1,
    },
    {
      id: "2",
      message: "This is a good post!",
      likesCount: 4,
    },
  ];

  let postElements = posts.map((p) => {
    return <Post message={p.message} likesCount={posts.likesCount} />;
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
