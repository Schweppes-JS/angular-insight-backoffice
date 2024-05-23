import { Component, Input, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { Any } from "src/types/any";

import { DialogComponent } from "./dialog.component";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}
  @Input() enterAnimationDuration = "";
  @Input() exitAnimationDuration = "";
  @Input() width = "";

  openModal(modalContent: TemplateRef<Any>, modalActions: TemplateRef<Any>): void {
    console.log(modalActions, modalActions);
    this.dialog.open(DialogComponent, {
      width: this.width ? this.width : "250px",
      enterAnimationDuration: this.enterAnimationDuration ? this.enterAnimationDuration : "200ms",
      exitAnimationDuration: this.exitAnimationDuration ? this.exitAnimationDuration : "100ms",
      data: { modalContent: modalContent, modalActions: modalActions },
    });
  }
}
