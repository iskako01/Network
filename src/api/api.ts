import axios from "axios";
import {
  PhotosType,
  ProfileType,
} from "../types/redusers/profile/ProfileActionType";
import { IsAuthType } from "../types/api/AuthApi";
import { Iuser } from "../types/redusers/users/UserInterfase";
// import { GetProfileType, StatusProfileType } from "../types/api/ProfileApi";

type GetCaptchaUrlType = { url: string };

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-Key": "7febd408-d6f1-41c3-9827-741f7fa77ca6",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersApi = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow(id: number | null) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  follow(id: number | null) {
    return instance.post(`follow/${id}`, {}).then((response) => response.data);
  },
};

export const securityApi = {
  getCaptchaUrl() {
    return instance
      .get<GetCaptchaUrlType>("security/get-captcha-url")
      .then((response) => response.data);
  },
};

type StatusProfileType = {
  resultCode: number;
  messages: Array<string>;
};

export const profileApi = {
  getProfile(userId: number | null) {
    return instance
      .get<ProfileType>(`profile/${userId}`)
      .then((response) => response.data);
  },
  statusProfile(userId: number | null) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateStatusProfile(status: string) {
    return instance
      .put(`profile/status`, { status })
      .then((response) => response.data);
  },
  editProfile(profile: ProfileType) {
    return instance.put(`profile`, profile).then((response) => response.data);
  },
  savePhoto(file: any) {
    const formData = new FormData();
    formData.append("image", file);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/from-data",
        },
      })
      .then((response) => response.data.data);
  },
};

export const authApi = {
  isAuth() {
    return instance
      .get<IsAuthType>(`auth/me`)
      .then((response) => response.data);
  },
  login(
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: string | null = null
  ) {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};
