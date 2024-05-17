export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type ContentBlock = {
  __typename?: "ContentBlock";
  en?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  uk?: Maybe<Scalars["String"]["output"]>;
};

export type CreateContentBlockInput = {
  en?: InputMaybe<Scalars["String"]["input"]>;
  uk?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateInfoSectionInput = {
  contentBlockIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  name: Scalars["String"]["input"];
  variation: Scalars["String"]["input"];
};

export type CreatePublicPageInput = {
  infoSectionIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  name: Scalars["String"]["input"];
  route: Scalars["String"]["input"];
};

export type CreateUserInput = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type InfoSection = {
  __typename?: "InfoSection";
  contentBlockIds: Array<Scalars["ID"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  variation: Scalars["String"]["output"];
};

export type LoginUserInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createContentBlock: ContentBlock;
  createInfoSection: InfoSection;
  createPublicPage: PublicPage;
  createUser: User;
  login: UserWithToken;
};

export type MutationCreateContentBlockArgs = {
  createContentBlockInput: CreateContentBlockInput;
};

export type MutationCreateInfoSectionArgs = {
  createInfoSectionInput: CreateInfoSectionInput;
};

export type MutationCreatePublicPageArgs = {
  createPublicPageInput: CreatePublicPageInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};

export type PublicPage = {
  __typename?: "PublicPage";
  id: Scalars["ID"]["output"];
  infoSectionIds: Array<Scalars["ID"]["output"]>;
  name: Scalars["String"]["output"];
  route: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  contentBlock: ContentBlock;
  contentBlocks: Array<ContentBlock>;
  infoSection: InfoSection;
  infoSections: Array<InfoSection>;
  me: User;
  publicPage: PublicPage;
  publicPages: Array<PublicPage>;
  user: User;
  users: Array<User>;
};

export type QueryContentBlockArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryInfoSectionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPublicPageArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  password: Scalars["String"]["output"];
};

export type UserWithToken = {
  __typename?: "UserWithToken";
  token: Scalars["String"]["output"];
  user: User;
};
