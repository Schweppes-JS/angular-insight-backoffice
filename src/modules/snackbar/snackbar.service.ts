import { MatSnackBar } from "@angular/material/snack-bar";
import { ApolloError } from "@apollo/client/errors";
import { Injectable } from "@angular/core";

import { IOriginalError } from "src/types/general";
import {
  ISnackbarTemplatesProps,
  ISnackbarActionProps,
  ISnackbarOpenProps,
  ISnackbarTempalte,
  ISnackbarConfig,
  ISnackbarProps,
} from "./snackbar.interface";

const defaultSnackbarConfig: ISnackbarConfig = {
  panelClass: ["snackbar__wrapper"],
  horizontalPosition: "right",
  verticalPosition: "top",
  duration: 5000,
};

@Injectable()
export class SnackbarService {
  private successMessage = "Successfully completed";
  private successTemplate?: ISnackbarTempalte;
  private errorMessage = "An error occurred";
  private errorTemplate?: ISnackbarTempalte;

  constructor(private snackBar: MatSnackBar) {}

  setTemplates({ errorTemplate, successTemplate }: ISnackbarTemplatesProps) {
    this.successTemplate = successTemplate;
    this.errorTemplate = errorTemplate;
  }

  success(props?: ISnackbarActionProps) {
    this.open({ template: this.successTemplate, message: props?.message ? props?.message : this.successMessage });
    props?.onSettled?.();
  }

  error(props?: ISnackbarActionProps) {
    let announcement = "";
    if (typeof props?.error === "string") announcement = props?.error;
    else if (props?.error instanceof ApolloError) {
      if (props?.error?.message === "Bad Request Exception") {
        props.error.graphQLErrors.forEach((error) => {
          if (error.extensions["originalError"]) {
            announcement =
              announcement +
              (error.extensions["originalError"] as IOriginalError).message.map((validationError) => `- ${validationError}`).join("\n\n");
          } else announcement = announcement + error.message;
        });
      } else if (typeof props?.error?.message === "string") announcement = props?.error?.message;
      else announcement = this.errorMessage;
    } else if (props?.message) announcement = props.message;
    else announcement = this.errorMessage;
    this.open({ template: this.errorTemplate, message: announcement });
    props?.onSettled?.();
  }

  open({ template, message }: ISnackbarOpenProps) {
    if (template) this.snackBar.openFromTemplate(template, this.getSnackbarConfig({ message }));
    else this.snackBar.open(message, undefined, defaultSnackbarConfig);
  }

  private getSnackbarConfig(data: ISnackbarProps): ISnackbarConfig {
    return { ...defaultSnackbarConfig, data };
  }
}
