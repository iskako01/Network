import { usersApi } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const IS_LOADING = "IS_LOADING";
const BUTTON_DISABLE = "BUTTON_DISABLE";

let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  loading: false,
  disable: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case IS_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case BUTTON_DISABLE: {
      return {
        ...state,
        disable: action.disable
          ? [...state.disable, action.userId]
          : state.disable.filter((d) => d !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const isLoading = (loading) => ({
  type: IS_LOADING,
  loading,
});
export const buttonDisable = (disable, userId) => ({
  type: BUTTON_DISABLE,
  disable,
  userId,
});

//Thunk

export const requestUsers = (page, pageSize) => (dispatch) => {
  dispatch(isLoading(true));
  dispatch(setCurrentPage(page));
  usersApi.getUsers(page, pageSize).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(isLoading(false));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(buttonDisable(true, userId));
  usersApi.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(buttonDisable(false, userId));
  });
};

export const unfollow = (userId) => (dispatch) => {
  dispatch(buttonDisable(true, userId));
  usersApi.unfollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(buttonDisable(false, userId));
  });
};

export default usersReduser;
