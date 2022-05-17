import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-Key": "7febd408-d6f1-41c3-9827-741f7fa77ca6",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data);
  },
};

export const profileApi = {
  userProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  statusProfile(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatusProfile(status) {
    return instance
      .put(`profile/status`, { status })
      .then((response) => response.data);
  },
};

export const authApi = {
  isAuth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
