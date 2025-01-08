import { ContentManagementComponent } from "../content-management/content-management.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { LoginGuardService } from "../login/login-guard.service";
import { AuthGuardService } from "../auth/auth-guard.service";
import { LayoutComponent } from "../layout/layout.component";
import { LoginComponent } from "../login/login.component";

export const routers = [
  { path: "login", component: LoginComponent, canActivate: [LoginGuardService] },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: DashboardComponent, canActivate: [AuthGuardService] },
      { path: "content-management", component: ContentManagementComponent, canActivate: [AuthGuardService] },
      { path: "**", component: NotFoundComponent, canActivate: [AuthGuardService] },
    ],
  },
];
