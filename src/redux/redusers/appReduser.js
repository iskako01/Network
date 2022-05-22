import { getAuthUserData } from "./authReduser";
const INITIALIZATION_SUCCESS = "INITIALIZATION_SUCCESS";

let initialState = {
  userId: null,
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const initializationSuccess = () => ({
  type: INITIALIZATION_SUCCESS,
});

//Thunk
export const initializeApp = () => (dispatch) => {
  const res = dispatch(getAuthUserData());
  res.then(() => {
    dispatch(initializationSuccess());
  });
};

export default appReduser;
