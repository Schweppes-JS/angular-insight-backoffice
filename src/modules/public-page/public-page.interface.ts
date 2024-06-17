import {
  MutationDeletePublicPageArgs,
  MutationCreatePublicPageArgs,
  DeletePublicPageInput,
  CreatePublicPageInput,
  Mutation,
  Query,
} from "../graphql/graphql.inteface";

export interface IPublicPagesQueryResponse extends Pick<Query, "publicPages"> {}

export interface IDeletePublicPagesMutationResponse extends Pick<Mutation, "deletePublicPage"> {}

export interface ICreatePublicPagesMutationResponse extends Pick<Mutation, "createPublicPage"> {}

export interface IDeletePublicPageVariables extends Record<keyof MutationDeletePublicPageArgs, DeletePublicPageInput> {}

export interface ICreatePublicPageVariables extends Record<keyof MutationCreatePublicPageArgs, CreatePublicPageInput> {}
