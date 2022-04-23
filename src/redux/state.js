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
    },
  },

  getState() {
    return this._state;
  },

  _rerenderEntireTree() {
    console.log("State change");
  },

  addPost() {
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
  },

  updateNewPostText(newText) {
    this._state.profilePage.newTextPost = newText;
    this._rerenderEntireTree(this._state);
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;
