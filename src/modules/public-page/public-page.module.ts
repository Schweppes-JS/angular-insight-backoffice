import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";
import { ModalModule } from "../modal/modal.module";

import { CreatePublicPageModalComponent } from "./create-public-page-modal/create-public-page-modal.component";
import { DeletePublicPageModalComponent } from "./delete-public-page-modal/delete-public-page-modal.component";
import { PublicPageService } from "./public-page.service";

@NgModule({
  imports: [CommonModule, MaterialModule, ModalModule, FormsModule, ReactiveFormsModule],
  declarations: [CreatePublicPageModalComponent, DeletePublicPageModalComponent],
  exports: [CreatePublicPageModalComponent, DeletePublicPageModalComponent],
  providers: [PublicPageService],
})
export class PublicPageModule {}
