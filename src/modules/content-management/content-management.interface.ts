import { Mutation, Query } from "../graphql/graphql.inteface";

export interface IPublicPagesQueryResponse extends Pick<Query, "publicPages"> {}

export interface IDeletePublicPagesMutationResponse extends Pick<Mutation, "deletePublicPage"> {}
