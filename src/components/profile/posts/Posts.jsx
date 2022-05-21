import React from "react";
import classes from "./Posts.module.css";
import Post from "../post/Post";
import { useForm } from "react-hook-form";

const PostForm = (props) => {
  const { register, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    props.addPost(data.postText);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("postText", {})} />
      </div>
      <div>
        <button onClick={onsubmit}>Add Post</button>
      </div>
    </form>
  );
};

const Posts = (props) => {
  let postElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} key={p.id} />;
  });

  return (
    <div className={classes.posts}>
      <div className={classes.special_post}>
        <PostForm {...props} />

        {postElements}
      </div>
    </div>
  );
};

export default Posts;
