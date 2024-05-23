import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";

import { ModalComponent } from "./modal.component";

@NgModule({ declarations: [ModalComponent], exports: [ModalComponent], imports: [CommonModule, MaterialModule] })
export class ModalModule {}
