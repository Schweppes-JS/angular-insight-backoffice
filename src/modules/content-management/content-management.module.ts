import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";

import { ContentManagementComponent } from "./content-management.component";
import { ContentManagementService } from "./content-management.service";
import { ModalModule } from "../modal/modal.module";

@NgModule({
  imports: [CommonModule, MaterialModule, ModalModule],
  declarations: [ContentManagementComponent],
  providers: [ContentManagementService],
})
export class ContentManagementModule {}
