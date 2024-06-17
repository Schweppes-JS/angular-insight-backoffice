import { FormBuilder, Validators } from "@angular/forms";
import { Component, Input, OnDestroy } from "@angular/core";
import { Subscription, switchMap, tap } from "rxjs";
import { ApolloError } from "@apollo/client/core";

import { ContentManagementService } from "src/modules/content-management/content-management.service";
import { CreatePublicPageInput, InfoSection } from "src/modules/graphql/graphql.inteface";
import { InfoSectionService } from "src/modules/info-section/info-section.service";
import { pageRouteRegExp } from "src/constants/regexp";

import { PublicPageService } from "../public-page.service";

const createPublicPageFormDefaultValues = { route: "", infoSectionIds: new Array<string>(), name: "" };

@Component({
  templateUrl: "./create-public-page-modal.component.html",
  styleUrl: "./create-public-page-modal.component.scss",
  selector: "app-create-public-page-modal",
})
export class CreatePublicPageModalComponent implements OnDestroy {
  constructor(
    private readonly contentManagementService: ContentManagementService,
    private readonly publicPageService: PublicPageService,
    private readonly infoSection: InfoSectionService,
    private readonly fb: FormBuilder
  ) {}
  private subscriptions: Subscription[] = [];
  infoSections: InfoSection[] = [];
  @Input() iconText = "";
  errorMessage = "";
  isLoaded = false;

  createPublicPageForm = this.fb.group({
    route: [createPublicPageFormDefaultValues.route, [Validators.required, Validators.pattern(pageRouteRegExp)]],
    infoSectionIds: [createPublicPageFormDefaultValues.infoSectionIds],
    name: [createPublicPageFormDefaultValues.name, Validators.required],
  });

  onOpen() {
    if (!this.isLoaded) {
      const infoSectionsSubscription = this.infoSection.getAllInfoSections().subscribe({
        next: (response) => {
          this.infoSections = response?.data.infoSections ?? [];
          this.isLoaded = true;
        },
        error: (error: ApolloError) => {
          this.errorMessage = error.message;
          this.isLoaded = true;
        },
      });
      this.subscriptions.push(infoSectionsSubscription);
    }
  }

  createPage() {
    if (this.createPublicPageForm.valid) {
      const createPublicPageInput = this.createPublicPageForm.value;
      if (this.isPublicPageInput(createPublicPageInput))
        return this.publicPageService
          .createPublicPage(createPublicPageInput)
          .pipe(switchMap(() => this.publicPageService.getFreshPublicPages()))
          .pipe(tap({ next: ({ data }) => this.contentManagementService.changeContentManagementTab(data.publicPages.length - 1) }));
      else return Promise.reject("Form is invalid");
    } else {
      this.markFormGroupTouched();
      return Promise.reject();
    }
  }

  private isPublicPageInput(values: typeof this.createPublicPageForm.value): values is CreatePublicPageInput {
    return Boolean(values.infoSectionIds && values.name && values.route);
  }

  private markFormGroupTouched() {
    Object.keys(this.createPublicPageForm.controls).forEach((key) => {
      const control = this.createPublicPageForm.get(key);
      control?.markAsTouched();
    });
  }

  reset() {
    this.createPublicPageForm.reset(createPublicPageFormDefaultValues);
  }

  get route() {
    return this.createPublicPageForm.get("route");
  }
  get name() {
    return this.createPublicPageForm.get("name");
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
