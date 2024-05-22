import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";

import { ContentManagementComponent } from "./content-management.component";
import { ContentManagementService } from "./content-management.service";

@NgModule({ imports: [CommonModule, MaterialModule], providers: [ContentManagementService], declarations: [ContentManagementComponent] })
export class ContentManagementModule {}
