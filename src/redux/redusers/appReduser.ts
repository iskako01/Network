import { getAuthUserData } from "./authReduser";
const INITIALIZATION_SUCCESS = "INITIALIZATION_SUCCESS";

export interface IinitialState {
  userId: number | null;
  initialized: boolean;
}

let initialState: IinitialState = {
  userId: null,
  initialized: false,
};

const appReduser = (state = initialState, action: any): IinitialState => {
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

type InitializationSuccessActionType = {
  type: typeof INITIALIZATION_SUCCESS;
};

export const initializationSuccess = (): InitializationSuccessActionType => ({
  type: INITIALIZATION_SUCCESS,
});

//Thunk
export const initializeApp = () => async (dispatch: any) => {
  await dispatch(getAuthUserData());

  dispatch(initializationSuccess());
};

export default appReduser;
