import { User, Query } from "../graphql/graphql.inteface";

export interface IMeQueryResponse extends Pick<Query, "me"> {}

export interface IUser extends Exclude<User, "password"> {}
