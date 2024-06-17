import { Component, OnInit, ViewChild } from "@angular/core";

import { ISnackbarTempalte } from "./snackbar.interface";
import { SnackbarService } from "./snackbar.service";

@Component({ templateUrl: "./snackbar.component.html", styleUrl: "./snackbar.component.scss", selector: "app-snackbar" })
export class SnackbarComponent implements OnInit {
  @ViewChild("errorTemplate", { static: true }) errorTemplate?: ISnackbarTempalte;
  @ViewChild("successTemplate", { static: true }) successTemplate?: ISnackbarTempalte;

  constructor(private readonly snackbarService: SnackbarService) {}

  ngOnInit(): void {
    if (this.errorTemplate && this.successTemplate) {
      this.snackbarService.setTemplates({ errorTemplate: this.errorTemplate, successTemplate: this.successTemplate });
    }
  }
}
