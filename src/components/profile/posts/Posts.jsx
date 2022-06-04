import React from "react";
import classes from "./Posts.module.css";
import Post from "../post/Post";
import { useForm } from "react-hook-form";

const PostForm = (props) => {
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    props.addPost(data.postText);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <textarea {...register("postText", { required: true })} />
      </div>
      <div>
        <button disabled={!formState.isValid} onClick={onsubmit}>
          Add Post
        </button>
      </div>
    </form>
  );
};

const Posts = React.memo((props) => {
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
});

export default Posts;
