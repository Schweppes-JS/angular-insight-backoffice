import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { switchMap, tap } from "rxjs";

import { ContentManagementService } from "src/modules/content-management/content-management.service";
import { ModalComponent } from "src/modules/modal/modal.component";
import { PublicPage } from "src/modules/graphql/graphql.inteface";

import { PublicPageService } from "../public-page.service";

@Component({
  imports: [CommonModule, ModalComponent],
  templateUrl: "delete-public-page-modal.component.html",
  selector: "app-delete-public-page-modal",
})
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
