import { authApi } from "../../api/api";
const SET_AUTH_USERS_DATA = "SET_AUTH_USERS_DATA";
const IS_LOADING = "IS_LOADING";
const AUTH_ME = "AUTH_ME";

let initialState = {
  userId: null,
  email: null,
  login: null,
  loading: false,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USERS_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    case IS_LOADING: {
      return {
        ...state,
        loading: action.loading,
      };
    }
    case AUTH_ME: {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USERS_DATA,
  data: { userId, email, login },
});
export const isLoading = (loading) => ({
  type: IS_LOADING,
  loading,
});
// export const setLoginData = (loginData) => ({
//   type: LOGIN,
//   loginData,
// });

//Thunk
export const getAuthUserData = () => (dispatch) => {
  dispatch(isLoading(true));
  authApi.isAuth().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login));
    }
  });
  dispatch(isLoading(false));
};

export const login = (email, password, rememberMe) => (dispatch) => {
  debugger;
  authApi.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export const logout = () => (dispatch) => {
  authApi.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};

export default authReduser;
