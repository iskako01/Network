const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: false,
      photoUrl:
        "https://miro.medium.com/max/2560/1*Zea8TZCxKyLsIuNCjPv5UQ.jpeg",
      fullname: "Alisher",
      status: "I like it",
      location: { city: "Almaty", country: "Kazakchstan" },
    },
    {
      id: 2,
      followed: true,
      photoUrl:
        "https://i.pinimg.com/originals/35/d9/ea/35d9eaf49c5a954b62e5930f56c452b5.jpg",
      fullname: "Toshka",
      status: "Tbilisi",
      location: { city: "Almaty", country: "Kazakchstan" },
    },
  ],
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});

export default profileReduser;
