import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Subscription, catchError, delay, of, tap } from "rxjs";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTabGroup } from "@angular/material/tabs";
import { CommonModule } from "@angular/common";

import { DeletePublicPageModalComponent } from "../public-page/delete-public-page-modal/delete-public-page-modal.component";
import { CreatePublicPageModalComponent } from "../public-page/create-public-page-modal/create-public-page-modal.component";

import { ContentManagementService } from "./content-management.service";
import { PublicPageService } from "../public-page/public-page.service";
import { PublicPage } from "../graphql/graphql.inteface";

@Component({
  imports: [
    CreatePublicPageModalComponent,
    DeletePublicPageModalComponent,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatTabsModule,
    CommonModule,
  ],
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
        delay(400),
        catchError(() =>
          of(null).pipe(
            delay(400),
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
