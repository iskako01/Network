import { authApi, securityApi } from "../../api/api";
const SET_AUTH_USERS_DATA = "SET_AUTH_USERS_DATA";
const IS_LOADING = "IS_LOADING";
const AUTH_ME = "AUTH_ME";
const ERROR_API = "ERROR_API";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

let initialState = {
  userId: null,
  email: null,
  login: null,
  loading: false,
  isAuth: false,
  errorApi: null,
  captchaUrl: null,
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
    case SET_CAPTCHA_URL: {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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
export const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  captchaUrl,
});

//Thunk
export const getAuthUserData = () => async (dispatch) => {
  const response = await authApi.isAuth();

  if (response.resultCode === 0) {
    dispatch(
      setAuthUserData(
        response.data.id,
        response.data.email,
        response.data.login,
        true
      )
    );
  }
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha);

    if (response.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      dispatch(setErrorApi(response.messages[0]));
    }
  };
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityApi.getCaptchaUrl();

  const captchaUrl = response.url;
  dispatch(setCaptchaUrl(captchaUrl));
};

export const logout = () => async (dispatch) => {
  const response = await authApi.logout();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;
