import { RouterModule } from "@angular/router";
import { Component } from "@angular/core";

import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  imports: [HeaderComponent, SidebarComponent, RouterModule],
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  selector: "app-layout",
})
export class LayoutComponent {}
