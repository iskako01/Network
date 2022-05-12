import React from "react";
import classes from "./Profile.module.css";
import Loader from "../common/preloader/Loader";

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Loader />;
  }
  return (
    <div>
      <div className={classes.top_img}>
        <img src="https://media-be.chewy.com/wp-content/uploads/2019/07/05151036/bringing-home-a-pug-1024x563.jpg" />
      </div>
      <div className={classes.profile}>
        <div className={classes.avatar}>
          <img src={props.userProfile.photos.small} />
          <div className={classes.aboutMe}>{props.userProfile.aboutMe}</div>
        </div>

        <div className={classes.info}>
          <div className={classes.title}>
            <h3>{props.userProfile.fullName}</h3>
          </div>
          <div className={classes.descriptio}>
            <div>facebook: {props.userProfile.contacts.facebook}</div>
            <div>twitter: {props.userProfile.contacts.twitter}</div>
            <div>instagram: {props.userProfile.contacts.instagram}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
