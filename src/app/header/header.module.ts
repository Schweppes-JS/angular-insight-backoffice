import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";

import { HeaderComponent } from "./header.component";

@NgModule({ declarations: [HeaderComponent], imports: [MaterialModule], exports: [HeaderComponent] })
export class HeaderModule {}
