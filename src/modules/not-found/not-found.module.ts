import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { MaterialModule } from "../material/material.module";

import { NotFoundComponent } from "./not-found.component";

@NgModule({ declarations: [NotFoundComponent], imports: [RouterModule, MaterialModule] })
export class NotFoundModule {}
