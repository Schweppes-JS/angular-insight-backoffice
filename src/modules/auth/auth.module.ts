import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AuthInterceptor } from "./auth-interceptor.service";
import { AuthGuardService } from "./auth-guard.service";
import { AuthService } from "./auth.service";

@NgModule({ providers: [AuthService, AuthGuardService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }] })
export class AuthModule {}
