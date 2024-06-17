import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PublicPageModule } from "../public-page/public-page.module";
import { MaterialModule } from "../material/material.module";

import { ContentManagementComponent } from "./content-management.component";
import { ContentManagementService } from "./content-management.service";

@NgModule({
  imports: [CommonModule, MaterialModule, PublicPageModule],
  declarations: [ContentManagementComponent],
  providers: [ContentManagementService],
})
export class ContentManagementModule {}
