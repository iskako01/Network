import dialogsReduser from "./redusers/dialogsReduser";
import profileReduser from "./redusers/profileReduser";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: "1",
          message: "Hi, What's up!",
          likesCount: 1,
        },
        {
          id: "2",
          message: "This is a good post!",
          likesCount: 4,
        },
      ],
      newTextPost: "",
    },
    dialogsPage: {
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
    },
  },
  _rerenderEntireTree() {
    console.log("State change");
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    profileReduser(this._state.profilePage, action);
    dialogsReduser(this._state.dialogsPage, action);

    this._rerenderEntireTree(this._state);
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;
