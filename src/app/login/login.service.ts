import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";

import { AUTH_TOKEN_STORAGE_KEY } from "../constants/localStorageKeys";

import { ILoginResponse, IUserLogin } from "./login.interface";

const LOGIN_MUTATION = gql`
  mutation LoginUser($loginUserInput: LoginUserInput!) {
    login(loginUserInput: $loginUserInput) {
      user {
        email
        firstName
        lastName
        id
      }
      token
    }
  }
`;

@Injectable()
export class LoginService {
  constructor(private apollo: Apollo) {}

  getToken(userLogin: IUserLogin) {
    return this.apollo.mutate<ILoginResponse>({ mutation: LOGIN_MUTATION, variables: { loginUserInput: userLogin } });
  }

  setToken(token: string) {
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
  }

  removeToken() {
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  }
}
