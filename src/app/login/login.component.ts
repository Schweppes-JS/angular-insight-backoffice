import { Component } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}
  loginError = "";
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  });

  submitLogin() {
    if (this.loginForm.valid) {
      // this.loadingHendler.start();
      this.http.post(`/auth/login`, { ...this.loginForm.value }).subscribe(
        () => {
          // this.loadingHendler.finish();
          this.loginError = "";
          this.router.navigate(["/chat"]);
        },
        ({ error }: HttpErrorResponse) => {
          // this.loadingHendler.finish();
          this.loginError = error.message ?? error.errors?.[0].msg;
          console.error(this.loginError ?? "something went wrong");
        }
      );
    }
  }

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
}
