import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { LayoutModule } from "@angular/cdk/layout";
import { TestBed } from "@angular/core/testing";
import { ApolloModule } from "apollo-angular";

import { NotFoundModule } from "../not-found/not-found.module";
import { MaterialModule } from "../material/material.module";
import { SidebarModule } from "../sidebar/sidebar.module";
import { GraphQLModule } from "../graphql/graphql.module";
import { LoginModule } from "../login/login.module";
import { UserService } from "../user/user.service";
import { AuthModule } from "../auth/auth.module";
import { UserModule } from "../user/user.module";
import { AppComponent } from "./app.component";
import { AppService } from "./app.service";

describe("AppComponent", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [BrowserAnimationsModule,
        RouterTestingModule,
        NotFoundModule,
        MaterialModule,
        BrowserModule,
        SidebarModule,
        GraphQLModule,
        ApolloModule,
        LayoutModule,
        LoginModule,
        UserModule,
        AuthModule],
    providers: [AppService, UserService, provideHttpClient(withInterceptorsFromDi())]
})
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
