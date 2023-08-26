import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule } from "apollo-angular";
import { StoreModule } from "@ngrx/store";

import { MaterialModule } from "./material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from "./login/login.module";
import { GraphQLModule } from "./graphql.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule,
    LoginModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
