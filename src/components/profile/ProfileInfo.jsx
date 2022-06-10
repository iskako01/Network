import React from "react";
import classes from "./Profile.module.css";
import Loader from "../common/preloader/Loader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../assets/img/noname.jpeg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={classes.top_img}>
        <img src="https://media-be.chewy.com/wp-content/uploads/2019/07/05151036/bringing-home-a-pug-1024x563.jpg" />
      </div>

      <div className={classes.profile}>
        <div className={classes.avatar}>
          <img src={props.profile.photos.large || userPhoto} />
          {props.isOwner && (
            <input type={"file"} onChange={onMainPhotoSelected} />
          )}
          <ProfileStatus
            status={props.status}
            updateStatusProfile={props.updateStatusProfile}
          />
          <div className={classes.aboutMe}>{props.profile.aboutMe}</div>
        </div>

        <div className={classes.info}>
          <div className={classes.title}>
            <h3>{props.profile.fullName}</h3>
          </div>

          <div className={classes.descriptio}>
            <div>facebook: {props.profile.contacts.facebook}</div>
            <div>twitter: {props.profile.contacts.twitter}</div>
            <div>instagram: {props.profile.contacts.instagram}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
