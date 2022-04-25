const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReduser = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: "3",
        message: state.newTextPost,
        likesCount: 0,
      };

      if (state.newTextPost !== "") {
        state.posts.push(newPost);
        state.newTextPost = "";
      }
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newTextPost = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReduser;
