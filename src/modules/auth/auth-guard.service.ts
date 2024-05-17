import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

import { AUTH_TOKEN_STORAGE_KEY } from "../../constants/localStorageKeys";
import { UserService } from "../user/user.service";
import { AppService } from "../app/app.service";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly appService: AppService
  ) {}

  canActivate(): boolean {
    if (this.appService.getIsAppLoaded()) {
      if (localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)) {
        const me = this.userService.readMe();
        if (me) return true;
        else {
          this.authService.logout();
          return false;
        }
      } else {
        this.authService.logout();
        return false;
      }
    } else return true;
  }
}
