import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";

import { SidebarComponent } from "./sidebar.component";
import { SidebarService } from "./sidebar.service";

@NgModule({ imports: [MaterialModule], providers: [SidebarService], declarations: [SidebarComponent], exports: [SidebarComponent] })
export class SidebarModule {}
