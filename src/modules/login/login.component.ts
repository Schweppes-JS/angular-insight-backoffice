import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { Component, OnDestroy } from "@angular/core";
import { ApolloError } from "@apollo/client/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { UserService } from "../user/user.service";
import { LoginService } from "./login.service";

@Component({
  imports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  selector: "app-login",
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
