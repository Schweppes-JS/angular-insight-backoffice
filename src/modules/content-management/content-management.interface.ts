import { Query } from "../graphql/graphql.inteface";

export interface IPublicPagesQueryResponse extends Pick<Query, "publicPages"> {}
