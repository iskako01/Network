export type IsAuthType = {
  data: { id: number; email: string; login: string };
  resultCode: number;
  messages: Array<string>;
};
export type LoginType = {
  data: {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string | null;
  };
  resultCode: number;
  messages: Array<string>;
};
export type LogoutType = {
  data: {};
  resultCode: number;
  messages: Array<string>;
};
