import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { AUTH_TOKEN_STORAGE_KEY } from "../constants/authConstants";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(protected router: Router) {}

  canActivate(): boolean {
    console.log("here");
    if (localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)) return true;
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
