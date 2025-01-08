import { Component, Inject, OnDestroy, TemplateRef } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";

import { AnyType } from "src/types/any";

@Component({
  imports: [CommonModule, MatDialogModule],
  styleUrls: ["./dialog.component.scss"],
  templateUrl: "./dialog.component.html",
  selector: "app-dialog",
})
export class DialogComponent implements OnDestroy {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { modalContent: TemplateRef<AnyType>; modalActions: TemplateRef<AnyType>; onDestroy?: () => void }
  ) {}

  ngOnDestroy(): void {
    this.data.onDestroy?.();
  }
}
