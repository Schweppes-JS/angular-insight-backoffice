import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnDestroy } from "@angular/core";
import { ApolloError } from "@apollo/client/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { UserService } from "../user/user.service";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [LoginService, UserService],
})
export class LoginComponent implements OnDestroy {
  constructor(
    private readonly userService: UserService,
    private readonly loginService: LoginService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}
  private subscriptions: Subscription[] = [];
  isSubmitted = false;
  isLoading = false;
  loginError = "";
  hide = true;

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  onError(message: string) {
    this.loginError = message;
    this.isLoading = false;
  }

  submitLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.isLoading = true;
      const formValue = this.loginForm.value;
      if (formValue.email && formValue.password) {
        const tokenSubscription = this.loginService.getToken({ email: formValue.email, password: formValue.password }).subscribe({
          next: (response) => {
            response.data && this.loginService.setToken(response.data.login.token);
            const getMeSubscription = this.userService.getMe().subscribe({
              next: () => {
                this.isLoading = false;
                this.router.navigate(["/"], { replaceUrl: true });
              },
              error: (error: ApolloError) => this.onError(error.message),
            });
            this.subscriptions.push(getMeSubscription);
          },
          error: (error: ApolloError) => this.onError(error.message),
        });
        this.subscriptions.push(tokenSubscription);
      } else this.onError("Please fill all fields");
    }
  }

  fieldsChanged() {
    if (this.isSubmitted && this.loginError) this.loginError = "";
  }

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
