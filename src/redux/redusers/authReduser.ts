import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { authApi, securityApi } from "../../api/api";
import { AppStateType } from "../reduxStore";
const SET_AUTH_USERS_DATA = "SET_AUTH_USERS_DATA";
const IS_LOADING = "IS_LOADING";
const AUTH_ME = "AUTH_ME";
const ERROR_API = "ERROR_API";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

type IinitialState = {
  userId: number | null;
  email: string | null;
  login: string | null;
  loading: boolean;
  isAuth: boolean;
  errorApi: string | null;
  captchaUrl: string | null;
};
type IsLoadingActionType = {
  type: typeof IS_LOADING;
  loading: boolean;
};
type SetErrorApiActionType = {
  type: typeof ERROR_API;
  error: string;
};
type SetAuthUserDataType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USERS_DATA;
  data: SetAuthUserDataType;
};
type SetCaptchaUrlActionType = {
  type: typeof SET_CAPTCHA_URL;
  captchaUrl: string | null;
};

type ActionsType =
  | IsLoadingActionType
  | SetErrorApiActionType
  | SetAuthUserDataActionType
  | SetCaptchaUrlActionType;

let initialState: IinitialState = {
  userId: null,
  email: null,
  login: null,
  loading: false,
  isAuth: false,
  errorApi: null,
  captchaUrl: null,
};

const authReduser = (
  state = initialState,
  action: ActionsType
): IinitialState => {
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
    // case AUTH_ME: {
    //   return {
    //     ...state,
    //     isAuth: action.isAuth,
    //   };
    // }
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

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_AUTH_USERS_DATA,
  data: { userId, email, login, isAuth },
});

export const isLoading = (loading: boolean): IsLoadingActionType => ({
  type: IS_LOADING,
  loading,
});

export const setErrorApi = (error: string): SetErrorApiActionType => ({
  type: ERROR_API,
  error,
});

export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({
  type: SET_CAPTCHA_URL,
  captchaUrl,
});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsType>;

//Thunk
export const getAuthUserData =
  (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
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
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: any
  ): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
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
export const getCaptchaUrl =
  () => async (dispatch: DispatchType, getState: GetStateType) => {
    const response = await securityApi.getCaptchaUrl();

    const captchaUrl = response.url;
    dispatch(setCaptchaUrl(captchaUrl));
  };

export const logout =
  (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
    const response = await authApi.logout();
    if (response.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };

export default authReduser;
