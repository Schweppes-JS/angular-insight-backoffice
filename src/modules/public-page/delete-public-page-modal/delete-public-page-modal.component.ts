import { Component, Input } from "@angular/core";
import { switchMap, tap } from "rxjs";

import { ContentManagementService } from "src/modules/content-management/content-management.service";
import { PublicPage } from "src/modules/graphql/graphql.inteface";

import { PublicPageService } from "../public-page.service";

@Component({ templateUrl: "delete-public-page-modal.component.html", selector: "app-delete-public-page-modal" })
export class DeletePublicPageModalComponent {
  @Input({ required: true }) pageInfo?: PublicPage;

  constructor(
    private readonly publicPageService: PublicPageService,
    private readonly contentManagementService: ContentManagementService
  ) {}

  deletePage(id: string) {
    return () =>
      this.publicPageService
        .deletePublicPages({ id })
        .pipe(switchMap(() => this.publicPageService.getFreshPublicPages()))
        .pipe(tap({ next: () => this.contentManagementService.changeContentManagementTab(0) }));
  }
}
