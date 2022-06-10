import React from "react";
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./posts/PostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatusProfile={props.updateStatusProfile}
        savePhoto={props.savePhoto}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
