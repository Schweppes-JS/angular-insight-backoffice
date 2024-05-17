import { User, Query } from "../graphql/graphql.inteface";

export interface MeQuery extends Pick<Query, "me"> {}

export interface IUser extends Exclude<User, "password"> {}
