import { Apollo, gql } from "apollo-angular";
import { Injectable } from "@angular/core";

import { IDeletePublicPagesMutationResponse, IPublicPagesQueryResponse } from "./content-management.interface";

const PUBLIC_PAGES_QUERY = gql`
  query PublicPages {
    publicPages {
      id
      name
      infoSectionIds
      name
      route
    }
  }
`;

const DELETE_PUBLIC_PAGES_MUTATION = gql`
  mutation DeletePublicPage($id: ID!) {
    deletePublicPage(deletePublicPageInput: { id: $id }) {
      id
    }
  }
`;

@Injectable()
export class ContentManagementService {
  constructor(private readonly apollo: Apollo) {}

  getAllPublicPages() {
    return this.apollo.query<IPublicPagesQueryResponse>({ query: PUBLIC_PAGES_QUERY });
  }

  deletePublicPages(id: string) {
    return this.apollo.mutate<IDeletePublicPagesMutationResponse>({
      refetchQueries: [{ query: PUBLIC_PAGES_QUERY }],
      mutation: DELETE_PUBLIC_PAGES_MUTATION,
      variables: { id },
    });
  }
}
