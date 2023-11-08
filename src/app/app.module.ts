import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule } from "apollo-angular";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";

import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./layout/layout.module";
import { LoginModule } from "./login/login.module";
import { GraphQLModule } from "./graphql.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    GraphQLModule,
    ApolloModule,

    LayoutModule,
    LoginModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
