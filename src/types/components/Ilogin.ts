export interface IloginFormProps {
  login: (email: string, password: string, rememberMe: boolean) => void;
  captchaUrl: string;
  errorApi: string;
}
