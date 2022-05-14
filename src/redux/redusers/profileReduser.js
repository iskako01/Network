import { profileApi } from "../../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  newTextPost: "",
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: "3",
        message: state.newTextPost,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newTextPost: "",
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newTextPost: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});

//Thunk

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileApi.userProfile(userId);
  dispatch(setUserProfile(response));
};

export default profileReduser;
