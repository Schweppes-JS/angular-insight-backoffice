import { Apollo, gql } from "apollo-angular";
import { Injectable } from "@angular/core";

import { IPublicPagesQueryResponse } from "./content-management.interface";

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

@Injectable()
export class ContentManagementService {
  constructor(private readonly apollo: Apollo) {}

  getAllPublicPages() {
    return this.apollo.query<IPublicPagesQueryResponse>({ query: PUBLIC_PAGES_QUERY });
  }
}
