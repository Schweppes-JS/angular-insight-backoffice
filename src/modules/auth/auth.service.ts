import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../login/login.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly loginService: LoginService,
    protected router: Router
  ) {}
  logout() {
    this.loginService.removeToken();
    this.router.navigate(["/login"], { replaceUrl: true });
  }
}
