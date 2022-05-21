const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogsReduser = (state = initialState, action) => {
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

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export default dialogsReduser;
