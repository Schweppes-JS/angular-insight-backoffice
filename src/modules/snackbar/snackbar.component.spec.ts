import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MaterialModule } from "../material/material.module";

import { SnackbarComponent } from "./snackbar.component";
import { SnackbarService } from "./snackbar.service";

const DEFAULT_SUCCESS_MESSAGE = "Successfully completed";
const CUSTOM_SUCCESS_MESSAGE = "custom success message";
const CUSTOM_ERROR_MESSAGE = "custom error message";
const DEFAULT_ERROR_MESSAGE = "An error occurred";

describe("SnackbarComponent", () => {
  let fixture: ComponentFixture<SnackbarComponent>;
  let snackbarService: SnackbarService;
  let component: SnackbarComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      declarations: [SnackbarComponent],
      providers: [SnackbarService],
    });
    fixture = TestBed.createComponent(SnackbarComponent);
    snackbarService = TestBed.inject(SnackbarService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => expect(component).toBeTruthy());

  it("should render default snackbar error message", () => {
    snackbarService.error();
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.ownerDocument.querySelector('[data-test-id="snackbar-error"]');
    expect(errorElement.textContent).toBe(DEFAULT_ERROR_MESSAGE);
  });

  it("should render custom snackbar error message", () => {
    snackbarService.error({ message: CUSTOM_ERROR_MESSAGE });
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.ownerDocument.querySelector('[data-test-id="snackbar-error"]');
    expect(errorElement.textContent).toBe(CUSTOM_ERROR_MESSAGE);
  });

  it("should render default snackbar success message", () => {
    snackbarService.success();
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.ownerDocument.querySelector('[data-test-id="snackbar-success"]');
    expect(errorElement.textContent).toBe(DEFAULT_SUCCESS_MESSAGE);
  });

  it("should render custom snackbar success message", () => {
    snackbarService.success({ message: CUSTOM_SUCCESS_MESSAGE });
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.ownerDocument.querySelector('[data-test-id="snackbar-success"]');
    expect(errorElement.textContent).toBe(CUSTOM_SUCCESS_MESSAGE);
  });
});

describe("SnackbarService", () => {
  let snackbarService: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [MaterialModule, BrowserAnimationsModule], providers: [SnackbarService] });
    snackbarService = TestBed.inject(SnackbarService);
  });

  it("should render default mat-snackbar error messages", () => {
    snackbarService.error();
    const errorElement = document.querySelector(".mdc-snackbar__label");
    expect(errorElement?.textContent?.trim()).toBe(DEFAULT_ERROR_MESSAGE);
  });

  it("should render default mat-snackbar success messages", () => {
    snackbarService.success();
    const successElement = document.querySelector(".mdc-snackbar__label");
    expect(successElement?.textContent?.trim()).toBe(DEFAULT_SUCCESS_MESSAGE);
  });
});
