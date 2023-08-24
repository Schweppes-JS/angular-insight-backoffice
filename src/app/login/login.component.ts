import { FormBuilder, Validators } from "@angular/forms";
import { ApolloError } from "@apollo/client/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}
  isSubmitted = false;
  loginError = "";
  hide = true;

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  submitLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      if (formValue.email && formValue.password) {
        this.loginService.getToken({ email: formValue.email, password: formValue.password }).subscribe({
          next: (response) => response.data && this.loginService.setToken(response.data.login.token),
          error: (error: ApolloError) => (this.loginError = error.message),
        });
      } else this.loginError = "Please fill all fields";
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
}
