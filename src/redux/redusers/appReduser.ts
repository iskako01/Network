import { Dispatch } from "redux";
import { getAuthUserData } from "./authReduser.ts";
const INITIALIZATION_SUCCESS = "INITIALIZATION_SUCCESS";

interface IinitialState {
  userId: number | null;
  initialized: boolean;
}
interface IinitializationSuccess {
  type: typeof INITIALIZATION_SUCCESS;
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

export const initializationSuccess = (): IinitializationSuccess => ({
  type: INITIALIZATION_SUCCESS,
});

//Thunk
export const initializeApp =
  () => async (dispatch: Dispatch<IinitializationSuccess>) => {
    await dispatch(getAuthUserData());

    dispatch(initializationSuccess());
  };

export default appReduser;
