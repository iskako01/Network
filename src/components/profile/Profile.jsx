import React from "react";
import classes from "./Profile.module.css";
import PostsContainer from "./posts/PostsContainer";

const Profile = (props) => {
  return (
    <div>
      <div className={classes.top_img}>
        <img src="https://media-be.chewy.com/wp-content/uploads/2019/07/05151036/bringing-home-a-pug-1024x563.jpg" />
      </div>
      <div className={classes.profile}>
        <div className={classes.avatar}>
          <img src="https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2020/01/shutterstock_1268241238-2-768x512.jpg" />
        </div>
        <div className={classes.info}>
          <div className={classes.title}>
            <h3>Alisher iskakov</h3>
          </div>
          <div className={classes.descriptio}>
            <div>Date of Birth:</div>
            <div>City:</div>
            <div>Education:</div>
            <div>Web Site:</div>
          </div>
        </div>
      </div>
      <PostsContainer />
    </div>
  );
};

export default Profile;
