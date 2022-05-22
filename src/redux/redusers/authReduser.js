import { authApi } from "../../api/api";
const SET_AUTH_USERS_DATA = "SET_AUTH_USERS_DATA";
const IS_LOADING = "IS_LOADING";
const AUTH_ME = "AUTH_ME";
const ERROR_API = "ERROR_API";

let initialState = {
  userId: null,
  email: null,
  login: null,
  loading: false,
  isAuth: false,
  errorApi: null,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USERS_DATA: {
      return {
        ...state,
        ...action.data,
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
    case ERROR_API: {
      return {
        ...state,
        errorApi: action.error,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USERS_DATA,
  data: { userId, email, login, isAuth },
});
export const isLoading = (loading) => ({
  type: IS_LOADING,
  loading,
});
export const setErrorApi = (error) => ({
  type: ERROR_API,
  error,
});

//Thunk
export const getAuthUserData = () => (dispatch) => {
  dispatch(isLoading(true));
  authApi.isAuth().then((data) => {
    if (data.resultCode === 0) {
      dispatch(
        setAuthUserData(data.data.id, data.data.email, data.data.login, true)
      );
    }
  });
  dispatch(isLoading(false));
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authApi.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      dispatch(setErrorApi(data.messages[0]));
    }
  });
};

export const logout = () => (dispatch) => {
  authApi.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReduser;
