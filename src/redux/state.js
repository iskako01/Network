const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: "3",
        message: this._state.profilePage.newTextPost,
        likesCount: 0,
      };

      if (this._state.profilePage.newTextPost !== "") {
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newTextPost = "";
      }

      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newTextPost = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: "3",
        message: this._state.dialogsPage.newTextMessage,
      };

      if (this._state.dialogsPage.newTextMessage !== "") {
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newTextMessage = "";
      }
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newTextMessage = action.newMessage;
      this._rerenderEntireTree(this._state);
    }
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMeesageTextActionCreator = (message) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: message,
});

export default store;
