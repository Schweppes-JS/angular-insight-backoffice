import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";

import { SnackbarComponent } from "./snackbar.component";
import { SnackbarService } from "./snackbar.service";

@NgModule({ declarations: [SnackbarComponent], imports: [MaterialModule], exports: [SnackbarComponent], providers: [SnackbarService] })
export class SnackbarModule {}
