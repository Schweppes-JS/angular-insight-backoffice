import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { AUTH_TOKEN_STORAGE_KEY } from "../../constants/localStorageKeys";
import { UserService } from "../user/user.service";
import { AppService } from "../app/app.service";

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(
    protected router: Router,
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {}

  canActivate(): boolean {
    if (this.appService.getIsAppLoaded()) {
      if (localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)) {
        const me = this.userService.readMe();
        if (me) {
          this.router.navigate(["/"]);
          return false;
        } else return true;
      } else return true;
    } else return true;
  }
}
