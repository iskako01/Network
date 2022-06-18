import { Iphotos } from "./UserPhotoInterface";

export type Iuser = {
  name: string;
  id: number;
  photos: Iphotos;
  status: string;
  followed: boolean;
};
