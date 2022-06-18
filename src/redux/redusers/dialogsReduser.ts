const ADD_MESSAGE = "ADD-MESSAGE";

interface Idialogs {
  id: string;
  name: string;
}
interface Imessages {
  id: string;
  message: string;
}

interface IinitialState {
  dialogs: Idialogs[];
  messages: Imessages[];
}

let initialState: IinitialState = {
  dialogs: [
    {
      id: "1",
      name: "Alisher",
    },
    {
      id: "2",
      name: "Toshka",
    },
  ],

  messages: [
    {
      id: "1",
      message: "Hello",
    },
    {
      id: "2",
      message: "How are you?",
    },
  ],
};

const dialogsReduser = (
  state = initialState,
  action: AddMessageActionType
): IinitialState => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: "3",
        message: action.message,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};
type AddMessageActionType = {
  type: typeof ADD_MESSAGE;
  message: string;
};

export const addMessage = (message: string): AddMessageActionType => ({
  type: ADD_MESSAGE,
  message,
});

export default dialogsReduser;
