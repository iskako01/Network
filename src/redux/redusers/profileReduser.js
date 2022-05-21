import { profileApi } from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE";

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
  ],
  userProfile: null,
  status: "",
};

const profileReduser = (state = initialState, action) => {
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
        newTextPost: "",
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile,
      };
    }
    case SET_STATUS_PROFILE: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPost = (postText) => ({
  type: ADD_POST,
  postText,
});

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});
export const setStatusProfile = (status) => ({
  type: SET_STATUS_PROFILE,
  status,
});

//Thunk

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileApi.userProfile(userId);
  dispatch(setUserProfile(response));
};
export const getStatusProfile = (userId) => async (dispatch) => {
  let response = await profileApi.statusProfile(userId);
  dispatch(setStatusProfile(response));
};
export const updateStatusProfile = (status) => async (dispatch) => {
  let response = await profileApi.updateStatusProfile(status);
  if (response.resultCode === 0) {
    dispatch(setStatusProfile(status));
  }
};

export default profileReduser;
