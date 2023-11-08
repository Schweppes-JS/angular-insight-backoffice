import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../material/material.module";

import { LoginGuardService } from "./login-guard.service";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  providers: [LoginService, LoginGuardService],
  declarations: [LoginComponent],
})
export class LoginModule {}
