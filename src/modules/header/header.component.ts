import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { SidebarService } from "../sidebar/sidebar.service";
import { AuthService } from "../auth/auth.service";

@Component({
  imports: [CommonModule, MatIconModule, MatToolbarModule, MatButtonModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  selector: "app-header",
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    public sidebarService: SidebarService
  ) {}
}
