const SET_AUTH_USERS_DATA = "SET_AUTH_USERS_DATA";
const IS_LOADING = "IS_LOADING";

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

export default authReduser;
