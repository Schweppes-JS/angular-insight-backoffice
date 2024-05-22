import { Component, OnInit } from "@angular/core";

import { UserService } from "../user/user.service";

import { AppService } from "./app.service";
import { AuthGuardService } from "../auth/auth-guard.service";
import { LoginGuardService } from "../login/login-guard.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  constructor(
    public readonly appService: AppService,
    private readonly authGuardService: AuthGuardService,
    private readonly loginGuardService: LoginGuardService
  ) {}

  ngOnInit() {
    this.appService.loadingExternalInfo(this.authGuardService, this.loginGuardService);
  }
}
