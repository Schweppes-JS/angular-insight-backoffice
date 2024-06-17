import { Apollo, gql } from "apollo-angular";
import { Injectable } from "@angular/core";

import { CreatePublicPageInput, DeletePublicPageInput } from "../graphql/graphql.inteface";

import {
  ICreatePublicPagesMutationResponse,
  IDeletePublicPagesMutationResponse,
  ICreatePublicPageVariables,
  IDeletePublicPageVariables,
  IPublicPagesQueryResponse,
} from "./public-page.interface";

const PUBLIC_PAGES_QUERY = gql`
  query PublicPages {
    publicPages {
      infoSectionIds
      route
      name
      id
    }
  }
`;

const CREATE_PUBLIC_PAGE_MUTATION = gql`
  mutation CreatePublicPage($createPublicPageInput: CreatePublicPageInput!) {
    createPublicPage(createPublicPageInput: $createPublicPageInput) {
      id
    }
  }
`;

const DELETE_PUBLIC_PAGE_MUTATION = gql`
  mutation DeletePublicPage($deletePublicPageInput: DeletePublicPageInput!) {
    deletePublicPage(deletePublicPageInput: $deletePublicPageInput) {
      id
    }
  }
`;

@Injectable()
export class PublicPageService {
  constructor(private readonly apollo: Apollo) {}

  watchAllPublicPages() {
    return this.apollo.watchQuery<IPublicPagesQueryResponse>({ query: PUBLIC_PAGES_QUERY }).valueChanges;
  }

  getFreshPublicPages() {
    return this.apollo.query<IPublicPagesQueryResponse>({ query: PUBLIC_PAGES_QUERY, fetchPolicy: "network-only" });
  }

  deletePublicPages(deletePublicPageInput: DeletePublicPageInput) {
    return this.apollo.mutate<IDeletePublicPagesMutationResponse, IDeletePublicPageVariables>({
      mutation: DELETE_PUBLIC_PAGE_MUTATION,
      variables: { deletePublicPageInput },
    });
  }

  createPublicPage(createPublicPageInput: CreatePublicPageInput) {
    return this.apollo.mutate<ICreatePublicPagesMutationResponse, ICreatePublicPageVariables>({
      mutation: CREATE_PUBLIC_PAGE_MUTATION,
      variables: { createPublicPageInput },
    });
  }
}
