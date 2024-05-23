import { catchError, delay, of, tap } from "rxjs";
import { Component, OnInit } from "@angular/core";

import { PublicPage } from "../graphql/graphql.inteface";

import { ContentManagementService } from "./content-management.service";

@Component({
  templateUrl: "./content-management.component.html",
  styleUrls: ["./content-management.component.scss"],
  selector: "app-content-management",
})
export class ContentManagementComponent implements OnInit {
  publicPages: PublicPage[] = [];
  isLoaded = false;
  hasError = false;

  constructor(private readonly contentManagementService: ContentManagementService) {}

  ngOnInit() {
    this.contentManagementService
      .getAllPublicPages()
      .pipe(
        catchError(() =>
          of(null).pipe(
            delay(500),
            tap(() => {
              this.isLoaded = true;
              this.hasError = true;
            })
          )
        )
      )
      .subscribe({
        next: (response) => {
          this.publicPages = response?.data.publicPages ?? [];
          this.isLoaded = true;
        },
      });
  }

  deletePage(id: string) {
    return () => this.contentManagementService.deletePublicPages(id).subscribe();
  }
}
