import { AppStateType } from "../reduxStore.ts";

export const getUsers = (state:AppStateType) => {
  return state.usersPage.users;
};
export const getLoader = (state:AppStateType) => {
  return state.usersPage.loading;
};
export const getDisabled = (state:AppStateType) => {
  return state.usersPage.disable;
};
export const getPageSize = (state:AppStateType) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state:AppStateType) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state:AppStateType) => {
  return state.usersPage.currentPage;
};
