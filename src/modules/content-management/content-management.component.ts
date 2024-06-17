import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription, catchError, delay, of, tap } from "rxjs";
import { MatTabGroup } from "@angular/material/tabs";

import { ContentManagementService } from "./content-management.service";
import { PublicPageService } from "../public-page/public-page.service";
import { PublicPage } from "../graphql/graphql.inteface";

@Component({
  templateUrl: "./content-management.component.html",
  styleUrls: ["./content-management.component.scss"],
  selector: "app-content-management",
})
export class ContentManagementComponent implements OnInit, OnDestroy {
  @ViewChild("tabGroup", { static: false }) set contentTabGroup(tabGroup: MatTabGroup) {
    tabGroup && this.contentManagementService.setTabGroup(tabGroup);
  }
  private subscriptions: Subscription[] = [];
  publicPages: PublicPage[] = [];
  isLoaded = false;
  hasError = false;

  constructor(
    private readonly contentManagementService: ContentManagementService,
    private readonly publicPageService: PublicPageService
  ) {}

  ngOnInit() {
    const publicPageSubcription = this.publicPageService
      .watchAllPublicPages()
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
    this.subscriptions.push(publicPageSubcription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
