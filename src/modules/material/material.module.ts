import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

const MaterialComponents = [
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
];

@NgModule({ imports: [MaterialComponents], exports: [MaterialComponents] })
export class MaterialModule {}
