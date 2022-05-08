import React from "react";
import classes from "./Posts.module.css";
import Post from "../post/Post";

const Posts = (props) => {
  let postElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} key={p.id} />;
  });

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <>
      <div className={classes.posts}>
        <div className={classes.special_post}>
          <div>
            <textarea
              onChange={onPostChange}
              value={props.newTextPost}
              ref={newPostElement}
              className={classes}
            ></textarea>
          </div>

          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>

        {postElements}
      </div>
    </>
  );
};

export default Posts;
