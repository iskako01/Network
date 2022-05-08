const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
  newTextMessage: "",
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: "3",
        message: state.newTextMessage,
      };

      return {
        ...state,
        newTextMessage: "",
        messages: [...state.messages, newMessage],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newTextMessage: action.newMessage,
      };

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMeesageTextActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: message,
});

export default dialogsReduser;
