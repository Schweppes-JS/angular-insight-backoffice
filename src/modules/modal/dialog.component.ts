import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject, TemplateRef } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../material/material.module";
import { Any } from "src/types/any";

@Component({
  imports: [MaterialModule, CommonModule],
  styleUrls: ["./dialog.component.scss"],
  templateUrl: "./dialog.component.html",
  selector: "app-modal",
  standalone: true,
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { modalContent: TemplateRef<Any>; modalActions: TemplateRef<Any> }
  ) {}
}
