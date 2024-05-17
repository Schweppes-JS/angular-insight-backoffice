import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { LayoutComponent } from "./layout.component";

import { SidebarModule } from "../sidebar/sidebar.module";
import { HeaderModule } from "../header/header.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [HeaderModule, SidebarModule, RouterModule],
})
export class LayoutModule {}
