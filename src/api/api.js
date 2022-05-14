import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-Key": "7febd408-d6f1-41c3-9827-741f7fa77ca6",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const getUsers = (currentPage, pageSize) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const unfollow = (id) => {
  return instance.delete(`follow/${id}`).then((response) => response.data);
};

export const follow = (id) => {
  return instance.post(`follow/${id}`, {}).then((response) => response.data);
};
export const isAuth = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};
