import { ApolloClientOptions, ApolloLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client/core";
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { onError } from "@apollo/client/link/error";
import { HttpLink } from "apollo-angular/http";
import { Router } from "@angular/router";
import { NgModule } from "@angular/core";

import { AUTH_TOKEN_STORAGE_KEY } from "src/constants/localStorageKeys";
import { environment } from "src/environments/environment";

@NgModule({
  imports: [ApolloModule],
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink, router: Router): ApolloClientOptions<NormalizedCacheObject> => {
        const errorLink = onError(({ graphQLErrors }) => {
          if (graphQLErrors) {
            graphQLErrors.forEach(({ extensions, message }) => {
              if (message === "Unauthorized" || extensions?.["code"] === 401) {
                localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
                router.navigate(["/login"]);
              }
            });
          }
        });
        return { link: ApolloLink.from([errorLink, httpLink.create({ uri: environment.GRAPHQL_URL })]), cache: new InMemoryCache() };
      },
      deps: [HttpLink, Router],
    },
  ],
})
export class GraphQLModule {}
