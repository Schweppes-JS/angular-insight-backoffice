import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { NgModule } from "@angular/core";
import { ApolloClientOptions, InMemoryCache, NormalizedCacheObject } from "@apollo/client/core";
import { environment } from "src/environments/environment";

export function createApollo(httpLink: HttpLink): ApolloClientOptions<NormalizedCacheObject> {
  return { link: httpLink.create({ uri: environment.GRAPHQL_URL }), cache: new InMemoryCache() };
}

@NgModule({
  imports: [ApolloModule],
  exports: [ApolloModule],
  providers: [{ provide: APOLLO_OPTIONS, useFactory: createApollo, deps: [HttpLink] }],
})
export class GraphQLModule {}
