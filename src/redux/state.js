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

export let addPost = (newMessage) => {
  console.log(newMessage);
  let newPost = {
    id: "3",
    message: newMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
