import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"],
  imports: [RouterModule, MatButtonModule],
})
export class NotFoundComponent {}
