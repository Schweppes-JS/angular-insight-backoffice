import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

import { AUTH_TOKEN_STORAGE_KEY } from "../constants/localStorageKeys";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    protected router: Router,
    private readonly userService: UserService
  ) {}

  canActivate(): boolean {
    if (localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)) {
      const me = this.userService.readMe();
      if (me) return true;
      else {
        this.router.navigate(["/login"], { replaceUrl: true });
        return false;
      }
    } else {
      this.router.navigate(["/login"], { replaceUrl: true });
      return false;
    }
  }
}
