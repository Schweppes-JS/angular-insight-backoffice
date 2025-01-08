import { TestBed } from "@angular/core/testing";
import { ApolloModule } from "apollo-angular";

import { AuthGuardService } from "../auth/auth-guard.service";
import { AuthService } from "../auth/auth.service";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [ApolloModule], providers: [AuthService, AuthGuardService] }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
