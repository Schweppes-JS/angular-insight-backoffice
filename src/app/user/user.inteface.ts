import * as GraphqlTypes from "src/graphql/generated";

export interface IUser extends Omit<GraphqlTypes.User, "password" | "__typename"> {}

export interface IMeResponse {
  me: GraphqlTypes.User;
}
