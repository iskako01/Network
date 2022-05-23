export const getUsers = (state) => {
  return state.usersPage.users;
};
export const getLoader = (state) => {
  return state.usersPage.loading;
};
export const getDisabled = (state) => {
  return state.usersPage.disable;
};
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
