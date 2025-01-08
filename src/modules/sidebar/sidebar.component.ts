import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SidebarService } from "./sidebar.service";

@Component({
  imports: [CommonModule, RouterModule, MatListModule, MatSidenavModule],
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  selector: "app-sidebar",
})
export class SidebarComponent implements OnInit {
  constructor(public sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.setDefaultSidebarCondition();
  }
}
