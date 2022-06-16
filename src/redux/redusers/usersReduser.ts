import { Iuser } from "../../types/users/UserInterfase";
import { usersApi } from "../../api/api";

enum UsersActionTypes {
  FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET_USERS",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
  IS_LOADING = "IS_LOADING",
  BUTTON_DISABLE = "BUTTON_DISABLE",
}

// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
// const SET_USERS = "SET_USERS";
// const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
// const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
// const IS_LOADING = "IS_LOADING";
// const BUTTON_DISABLE = "BUTTON_DISABLE";

interface IuserInitialState {
  users: Iuser[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  loading: boolean;
  disable: Array<number>;
}

let initialState: IuserInitialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  loading: false,
  disable: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case UsersActionTypes.FOLLOW: {
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
    case UsersActionTypes.UNFOLLOW: {
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
    case UsersActionTypes.SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case UsersActionTypes.SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case UsersActionTypes.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case UsersActionTypes.IS_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case UsersActionTypes.BUTTON_DISABLE: {
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

export interface IfollowSuccess {
  type: UsersActionTypes.FOLLOW;
  userId: number;
}
export interface IunfollowSuccess {
  type: UsersActionTypes.UNFOLLOW;
  userId: number;
}
export interface IsetUsers {
  type: UsersActionTypes.SET_USERS;
  users: Iuser;
}
export interface IsetTotalUsersCount {
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT;
  totalUsersCount: number;
}
export interface IsetCurrentPage {
  type: UsersActionTypes.SET_CURRENT_PAGE;
  currentPage: number;
}
export interface IisLoading {
  type: UsersActionTypes.IS_LOADING;
  loading: boolean;
}
export interface IbuttonDisable {
  type: UsersActionTypes.BUTTON_DISABLE;
  disable: boolean;
  userId: number;
}

export const followSuccess = (userId: number): IfollowSuccess => ({
  type: UsersActionTypes.FOLLOW,
  userId,
});

export const unfollowSuccess = (userId: number): IunfollowSuccess => ({
  type: UsersActionTypes.UNFOLLOW,
  userId,
});

export const setUsers = (users: Iuser): IsetUsers => ({
  type: UsersActionTypes.SET_USERS,
  users,
});

export const setTotalUsersCount = (
  totalUsersCount: number
): IsetTotalUsersCount => ({
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const setCurrentPage = (currentPage: number): IsetCurrentPage => ({
  type: UsersActionTypes.SET_CURRENT_PAGE,
  currentPage,
});

export const isLoading = (loading: boolean): IisLoading => ({
  type: UsersActionTypes.IS_LOADING,
  loading,
});

export const buttonDisable = (disable, userId): IbuttonDisable => ({
  type: UsersActionTypes.BUTTON_DISABLE,
  disable,
  userId,
});

const followUnfollowFlow = (dispatch, response, userId, actionCreator) => {
  dispatch(buttonDisable(true, userId));

  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
  }

  dispatch(buttonDisable(false, userId));
};

//Thunk

export const follow = (userId: number) => {
  return async (dispatch: any) => {
    let actionCreator = followSuccess;

    const response = await usersApi.follow(userId);

    followUnfollowFlow(dispatch, response, userId, actionCreator);
  };
};
export const unfollow = (userId: number) => {
  return async (dispatch: any) => {
    let actionCreator = unfollowSuccess;

    const response = await usersApi.unfollow(userId);

    followUnfollowFlow(dispatch, response, userId, actionCreator);
  };
};

export const requestUsers =
  (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(isLoading(true));
    dispatch(setCurrentPage(page));

    const response = await usersApi.getUsers(page, pageSize);

    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
    dispatch(isLoading(false));
  };

export default usersReduser;
