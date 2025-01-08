import { ApolloClientOptions, ApolloLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";
import { APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { Provider } from "@angular/core";
import { Router } from "@angular/router";

import { AUTH_TOKEN_STORAGE_KEY } from "src/constants/localStorageKeys";
import { environment } from "src/environments/environment";

export const graphQLFactory: Provider = {
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
    return {
      link: ApolloLink.from([errorLink, httpLink.create({ uri: environment.GRAPHQL_URL || "http://localhost:48667/graphql" })]),
      cache: new InMemoryCache(),
    };
  },
  deps: [HttpLink, Router],
};
