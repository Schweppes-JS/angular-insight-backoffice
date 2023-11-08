import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { AUTH_TOKEN_STORAGE_KEY } from "../constants/authConstants";

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(protected router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)) {
      this.router.navigate(["/"]);
      return false;
    } else return true;
  }
}
