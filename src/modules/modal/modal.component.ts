import { Component, Input, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { Any } from "src/types/any";

import { DialogComponent } from "./dialog.component";

@Component({
  selector: "app-modal",
  styleUrls: ["./modal.component.scss"],
  templateUrl: "./modal.component.html",
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}
  @Input() enterAnimationDuration = "";
  @Input() exitAnimationDuration = "";
  @Input() confirmButtonColor = "";
  @Input() cancelButtonColor = "";
  @Input() openerIconTooltip = "";
  @Input() onConfirm?: () => Any;
  @Input() onCancel?: () => void;
  @Input() openerIconColor = "";
  @Input() confirmButton = "";
  @Input() cancelButton = "";
  @Input() contentTitle = "";
  @Input() openerIcon = "";
  @Input() width = "";

  openModal(modalContent: TemplateRef<Any>, modalActions: TemplateRef<Any>): void {
    this.dialog.open(DialogComponent, {
      width: this.width ? this.width : "auto",
      enterAnimationDuration: this.enterAnimationDuration ? this.enterAnimationDuration : "200ms",
      exitAnimationDuration: this.exitAnimationDuration ? this.exitAnimationDuration : "100ms",
      data: { modalContent: modalContent, modalActions: modalActions },
    });
  }
}
