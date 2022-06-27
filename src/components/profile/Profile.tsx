import React from "react";
import ProfileInfo from "./ProfileInfo";
import PostsContainer from "./posts/PostsContainer";
import { ProfileType } from "../../types/redusers/profile/ProfileActionType";

interface Iprofile {
  isOwner: boolean;
  profile: ProfileType;
  status: string;
  updateStatusProfile: () => void;
  savePhoto: () => void;
  editProfile: () => void;
}

const Profile: React.FC<Iprofile> = (props) => {
  return (
    <div>
      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatusProfile={props.updateStatusProfile}
        savePhoto={props.savePhoto}
        editProfile={props.editProfile}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
