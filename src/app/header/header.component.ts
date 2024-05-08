import { Component } from "@angular/core";

import { SidebarService } from "../sidebar/sidebar.service";
import { AuthService } from "../auth/auth.service";

@Component({ selector: "app-header", templateUrl: "./header.component.html", styleUrls: ["./header.component.less"] })
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    public sidebarService: SidebarService
  ) {}
}
