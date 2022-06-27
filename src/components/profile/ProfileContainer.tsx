import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatusProfile,
  updateStatusProfile,
  editProfile,
  savePhoto,
} from "../../redux/redusers/profileReduser";
import { withRouter } from "../../hoc/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { ProfileType } from "../../types/redusers/profile/ProfileActionType";

interface IprofileContainer {
  match: any;
  profile: ProfileType;
  status: string;
  updateStatusProfile: (status: string) => void;
  savePhoto: () => void;
  editProfile: () => void;
  getUserProfile: (userId: number) => void;
  getStatusProfile: (userId: number) => void;
  authorizatedUserId: number;
}

const ProfileContainer: React.FC<IprofileContainer> = (props) => {
  useEffect(() => {
    let userId = props.match
      ? props.match.params.userId
      : props.authorizatedUserId;
    props.getUserProfile(userId);
    props.getStatusProfile(userId);
  }, [props.match]);

  return (
    <Profile
      {...props}
      isOwner={!props.match}
      profile={props.profile}
      status={props.status}
      updateStatusProfile={props.updateStatusProfile}
      savePhoto={props.savePhoto}
      editProfile={props.editProfile}
    />
  );
};

const mapStateToProps = (state: A) => {
  return {
    loading: state.usersPage.loading,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizatedUserId: state.auth.userId,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatusProfile,
    updateStatusProfile,
    savePhoto,
    editProfile,
  }),
  withAuthRedirect,
  withRouter
)(ProfileContainer);
