import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserAnimationsModule, provideAnimations } from "@angular/platform-browser/animations";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { ApolloModule } from "apollo-angular";
import { StoreModule } from "@ngrx/store";

import { graphQLFactory } from "./modules/graphql/graphql.module";
import { AppComponent } from "./modules/app/app.component";
import { routers } from "./modules/routing/routing.module";
import { AuthService } from "./modules/auth/auth.service";
import { AuthGuardService } from "./modules/auth/auth-guard.service";
import { AuthInterceptor } from "./modules/auth/auth-interceptor.service";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([BrowserModule, BrowserAnimationsModule, StoreModule.forRoot({}, {}), ApolloModule]),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routers),
    provideAnimations(),
    AuthGuardService,
    graphQLFactory,
    AuthService,
  ],
}).catch((err) => console.error(err));
