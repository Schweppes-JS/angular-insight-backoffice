import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule } from "apollo-angular";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";

import { ContentManagementModule } from "../content-management/content-management.module";
import { NotFoundModule } from "../not-found/not-found.module";
import { MaterialModule } from "../material/material.module";
import { RoutingModule } from "../routing/routing.module";
import { GraphQLModule } from "../graphql/graphql.module";
import { LayoutModule } from "../layout/layout.module";
import { LoginModule } from "../login/login.module";
import { UserService } from "../user/user.service";
import { AuthModule } from "../auth/auth.module";
import { UserModule } from "../user/user.module";
import { AppComponent } from "./app.component";

import { AppService } from "./app.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    ContentManagementModule,
    HttpClientModule,
    NotFoundModule,
    MaterialModule,
    BrowserModule,
    GraphQLModule,
    RoutingModule,
    ApolloModule,
    LayoutModule,
    LoginModule,
    UserModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
  providers: [AppService, UserService],
})
export class AppModule {}
