import React from "react";
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./posts/PostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo userProfile={props.userProfile} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
