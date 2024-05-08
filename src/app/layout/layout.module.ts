import { NgModule } from "@angular/core";

import { LayoutComponent } from "./layout.component";

import { HeaderModule } from "../header/header.module";
import { SidebarModule } from "../sidebar/sidebar.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [HeaderModule, SidebarModule],
})
export class LayoutModule {}
