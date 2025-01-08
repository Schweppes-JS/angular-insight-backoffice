import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SnackbarComponent } from "../snackbar/snackbar.component";

import { LoginGuardService } from "../login/login-guard.service";
import { AuthGuardService } from "../auth/auth-guard.service";
import { AppService } from "./app.service";

@Component({
  imports: [SnackbarComponent, CommonModule, RouterOutlet, MatProgressSpinnerModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  selector: "app-root",
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
