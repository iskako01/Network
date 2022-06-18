import React, { useState } from "react";
import classes from "./Profile.module.css";
import Loader from "../common/preloader/Loader";
import ProfileStatus from "./ProfileStatus.tsx";
import ProfileEdit from "./ProfileEdit.tsx";
import userPhoto from "../../assets/img/noname.jpeg";
import {ProfileType} from "../../types/redusers/profile/ProfileActionType"

interface IprofileInfo{
profile:ProfileType;
isOwner:boolean
status:string
savePhoto:(file:number)=>void; 
editProfile:(data)=>void
updateStatusProfile:(status:string)=>void
toProfileEdit:()=>void
}
interface IprofileData{
profile:ProfileType;
isOwner:boolean
toProfileEdit:()=>void
}

const ProfileInfo:React.FC<IprofileInfo> = (props) => {
  let [editMode, setEditMode] = useState<boolean>(false);
  if (!props.profile) {
    return <Loader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (data) => {
    props.editProfile(data).then(() => {
      setEditMode(false);
    });
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
          {editMode ? (
            <ProfileEdit
              profile={props.profile}
              editProfile={props.editProfile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileData
              profile={props.profile}
              isOwner={props.isOwner}
              toProfileEdit={() => setEditMode(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactTitle} : {contactValue}
    </div>
  );
};

const ProfileData:React.FC<IprofileData> = (props) => {
  return (
    <div className={classes.info}>
      <div className={classes.title}>
        <h3>{props.profile.fullName}</h3>
      </div>
      <div className={classes.aboutMe}>About me{props.profile.aboutMe}</div>

      <div>
        Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
      </div>

      {props.profile.lookingForAJob && (
        <div>
          <b>My professional skills : </b>
          {props.profile.lookingForAJobDescription}
        </div>
      )}

      <div className={classes.contacts}>
        <div>
          <div>
            Contacts:
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <Contacts
                  key={key}
                  contactTitle={key}
                  contactValue={props.profile.contacts[key]}
                />
              );
            })}
          </div>
        </div>
      </div>
      {props.isOwner && <button onClick={props.toProfileEdit}>Edit</button>}
    </div>
  );
};

export default ProfileInfo;
