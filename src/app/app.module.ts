import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule } from "apollo-angular";
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";

import { NotFoundModule } from "./not-found/not-found.module";
import { MaterialModule } from "./material/material.module";
import { SidebarModule } from "./sidebar/sidebar.module";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./layout/layout.module";
import { LoginModule } from "./login/login.module";
import { GraphQLModule } from "./graphql.module";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { AppComponent } from "./app.component";

import { AppService } from "./app.service";
import { UserService } from "./user/user.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NotFoundModule,
    MaterialModule,
    BrowserModule,
    SidebarModule,
    GraphQLModule,
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
