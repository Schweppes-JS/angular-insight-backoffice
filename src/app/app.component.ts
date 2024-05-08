import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { takeWhile } from "rxjs";

import { UserService } from "./user/user.service";
import { AuthGuardService } from "./auth/auth-guard.service";
import { LoginGuardService } from "./login/login-guard.service";
import { AUTH_TOKEN_STORAGE_KEY } from "./constants/localStorageKeys";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  isAppLoaded = false;
  constructor(
    private readonly userService: UserService,
    private readonly authGuardService: AuthGuardService,
    private readonly loginGuardService: LoginGuardService,
    protected router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)) {
      this.userService
        .getMe()
        .pipe(takeWhile(() => !this.isAppLoaded))
        .subscribe({
          next: () => {
            this.isAppLoaded = true;
            this.authGuardService.canActivate();
            this.loginGuardService.canActivate();
          },
          error: () => {
            this.loginGuardService.canActivate();
            this.isAppLoaded = true;
          },
        });
    } else {
      this.isAppLoaded = true;
    }
  }
}
