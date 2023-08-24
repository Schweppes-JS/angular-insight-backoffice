export interface IUserLogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  login: {
    token: string;
  };
}
