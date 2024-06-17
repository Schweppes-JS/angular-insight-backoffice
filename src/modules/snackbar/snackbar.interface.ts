import { MatSnackBarConfig } from "@angular/material/snack-bar";
import { ApolloError } from "@apollo/client/errors";
import { TemplateRef } from "@angular/core";

import { AnyFunctionType } from "src/types/any";

export interface ISnackbarProps {
  message: string;
}

export interface ISnackbarTempalte extends TemplateRef<ISnackbarProps> {}

export interface ISnackbarActionProps {
  error?: ApolloError | string;
  onSettled?: AnyFunctionType;
  message?: string;
}

export interface ISnackbarConfig extends MatSnackBarConfig<ISnackbarProps> {}

export interface ISnackbarOpenProps {
  template?: ISnackbarTempalte;
  message: string;
}

export interface ISnackbarTemplatesProps {
  successTemplate: ISnackbarTempalte;
  errorTemplate: ISnackbarTempalte;
}
