import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginGuardService } from "./login/login-guard.service";
import { AuthGuardService } from "./auth/auth-guard.service";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [LoginGuardService] },
  { path: "", component: LayoutComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
