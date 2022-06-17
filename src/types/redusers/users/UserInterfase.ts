import { Iphotos } from "./UserPhotoInterface";

export interface Iuser {
  name: string;
  id: number;
  photos: Iphotos;
  status: string;
  followed: boolean;
}
