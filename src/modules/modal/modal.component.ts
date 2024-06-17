import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Component, Input, TemplateRef } from "@angular/core";
import { ApolloError } from "@apollo/client/errors";
import { Observable, Subscription } from "rxjs";

import { SnackbarService } from "../snackbar/snackbar.service";
import { AnyType } from "src/types/any";

import { DialogComponent } from "./dialog.component";

@Component({
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  selector: "app-modal",
})
export class ModalComponent {
  dialogRef: MatDialogRef<DialogComponent> | undefined;
  private subscriptions: Subscription[] = [];
  isLoading = false;

  constructor(
    private snackBar: SnackbarService,
    public dialog: MatDialog
  ) {}

  @Input() onConfirm?: () => Promise<AnyType> | Observable<AnyType> | void;
  @Input() successMessage = "Successfully completed";
  @Input() enterAnimationDuration = "";
  @Input() exitAnimationDuration = "";
  @Input() confirmButtonColor = "";
  @Input() cancelButtonColor = "";
  @Input() openerIconTooltip = "";
  @Input() onClose?: () => void;
  @Input() openerIconColor = "";
  @Input() onOpen?: () => void;
  @Input() asyncClose = false;
  @Input() confirmButton = "";
  @Input() cancelButton = "";
  @Input() contentTitle = "";
  @Input() openerIcon = "";
  @Input() panelClass = "";
  @Input() iconText = "";
  @Input() width = "";

  openModal(modalContent: TemplateRef<AnyType>, modalActions: TemplateRef<AnyType>): void {
    this.onOpen?.();
    this.dialogRef = this.dialog.open(DialogComponent, {
      width: this.width ? this.width : "auto",
      enterAnimationDuration: this.enterAnimationDuration ? this.enterAnimationDuration : "200ms",
      exitAnimationDuration: this.exitAnimationDuration ? this.exitAnimationDuration : "100ms",
      data: { modalContent, modalActions, onDestroy: this.onClose },
      panelClass: this.panelClass,
    });
  }

  confirm(): void {
    if (this.onConfirm) {
      if (this.asyncClose) this.isLoading = true;
      const result = this.onConfirm();
      if (result instanceof Observable) {
        const resultSubscription = result.subscribe({ next: this.handleSuccess, error: this.handleError });
        this.subscriptions.push(resultSubscription);
      } else if (result instanceof Promise) result.then(this.handleSuccess).catch(this.handleError);
      else this.close();
    } else this.close();
  }

  handleSuccess = () => {
    this.snackBar.success({ message: this.successMessage });
    this.close();
  };

  handleError = (error: ApolloError) => {
    error && this.snackBar.error({ error });
    this.isLoading = false;
  };

  close(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.dialogRef?.close();
    this.isLoading = false;
  }
}
