import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../reduxStore";
import { getAuthUserData } from "./authReduser";
const INITIALIZATION_SUCCESS = "INITIALIZATION_SUCCESS";

interface IinitialState {
  userId: number | null;
  initialized: boolean;
}
interface IinitializationSuccess {
  type: typeof INITIALIZATION_SUCCESS;
}

type ActionsType = IinitializationSuccess;

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
  (): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> =>
  async (dispatch) => {
    await dispatch(getAuthUserData());

    dispatch(initializationSuccess());
  };

export default appReduser;
