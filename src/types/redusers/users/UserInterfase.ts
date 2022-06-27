import { Iphotos } from "./UserPhotoInterface";

export type Iuser = {
  id: number;
  name: string;
  status: string;
};

export type Iusers = {
  items: Iuser[];
  photos: Iphotos;
  followed: boolean;
};
