import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { ApolloError } from "@apollo/client/errors";
import { BehaviorSubject, Observable, catchError, delay, of, take } from "rxjs";

import { AuthService } from "../auth/auth.service";
import { UserService } from "../user/user.service";
import { AuthGuardService } from "../auth/auth-guard.service";
import { LoginGuardService } from "../login/login-guard.service";
import { AUTH_TOKEN_STORAGE_KEY } from "../../constants/localStorageKeys";

@Injectable()
export class AppService {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  private isAppLoadedSubject = new BehaviorSubject<boolean>(false);

  public isAppLoaded$: Observable<boolean> = this.isAppLoadedSubject.asObservable();

  getIsAppLoaded(): boolean {
    return this.isAppLoadedSubject.value;
  }

  loadingExternalInfo(authGuardService: AuthGuardService, loginGuardService: LoginGuardService): void {
    if (localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)) {
      this.userService
        .getMe()
        .pipe(
          take(1),
          delay(500),
          catchError((error: ApolloError) => of(error).pipe(delay(500)))
        )
        .subscribe({
          next: () => {
            this.isAppLoadedSubject.next(true);
            if (this.router.url === "/login") loginGuardService.canActivate();
            else authGuardService.canActivate();
          },
          error: () => {
            this.isAppLoadedSubject.next(true);
            this.authService.logout();
          },
        });
    } else this.isAppLoadedSubject.next(true);
  }
}
