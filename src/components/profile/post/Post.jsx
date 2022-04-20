import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div>
        <img
          src="https://www.pdsa.org.uk/media/10064/pug-gallery-7.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=132430207200000000"
          alt=""
        />
      </div>
      <div className="text">{props.message}</div>
      <div className="">likes {props.likesCount}</div>
    </div>
  );
};

export default Post;
