import { profileApi } from "../../api/api";
import {
  ProfileType,
  PhotosType,
  PostsType,
} from "../../types/redusers/profile/ProfileActionType";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

interface IaddPost {
  type: typeof ADD_POST;
  postText: string;
}

interface IsetUserProfile {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
}
interface IsetStatusProfile {
  type: typeof SET_STATUS_PROFILE;
  status: string;
}
interface IsavePhotoSuccess {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
}

let initialState = {
  posts: [
    {
      id: "1",
      message: "Hi, What's up!",
      likesCount: 1,
    },
    {
      id: "2",
      message: "This is a good post!",
      likesCount: 4,
    },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: "",
};

export type InitialStateType = typeof initialState;

const profileReduser = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: "3",
        message: action.postText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS_PROFILE: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }

    default:
      return state;
  }
};

export const addPost = (postText: string): IaddPost => ({
  type: ADD_POST,
  postText,
});
export const setUserProfile = (profile: ProfileType): IsetUserProfile => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatusProfile = (status: string): IsetStatusProfile => ({
  type: SET_STATUS_PROFILE,
  status,
});
export const savePhotoSuccess = (photos: PhotosType): IsavePhotoSuccess => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

//Thunk

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await profileApi.getProfile(userId);
  dispatch(setUserProfile(response));
};
export const getStatusProfile = (userId: number) => async (dispatch: any) => {
  let response = await profileApi.statusProfile(userId);
  dispatch(setStatusProfile(response));
};
export const updateStatusProfile =
  (status: string) => async (dispatch: any) => {
    let response = await profileApi.updateStatusProfile(status);
    if (response.resultCode === 0) {
      dispatch(setStatusProfile(status));
    }
  };
export const savePhoto = (file: string) => async (dispatch: any) => {
  let response = await profileApi.savePhoto(file);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.photos));
  }
};
export const editProfile =
  (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    let response = await profileApi.editProfile(profile);
    if (response.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      return Promise.reject(response.message[0]);
    }
  };

export default profileReduser;
