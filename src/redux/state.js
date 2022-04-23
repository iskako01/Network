import { rerenderEntireTree } from "../render";

const state = {
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
};

export let addPost = () => {
  let newPost = {
    id: "3",
    message: state.profilePage.newTextPost,
    likesCount: 0,
  };
  if (state.profilePage.newTextPost !== "") {
    state.profilePage.posts.push(newPost);
    state.profilePage.newTextPost = "";
  }

  rerenderEntireTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePage.newTextPost = newText;
  rerenderEntireTree(state);
};

export default state;
