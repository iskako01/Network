export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type PostsType = {
  id: string;
  message: string;
  likesCount: number;
};
export type ContactsType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};
export type ProfileType = {
  resultCode: number;
  message: any;
  userId: number | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: ContactsType;
  photos: PhotosType;
  aboutMe: string | null;
};
