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
export const initializeApp = () => async (dispatch) => {
  await dispatch(getAuthUserData());

  dispatch(initializationSuccess());
};

export default appReduser;
