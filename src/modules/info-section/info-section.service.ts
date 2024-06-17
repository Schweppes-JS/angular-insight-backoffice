import { Apollo, gql } from "apollo-angular";
import { Injectable } from "@angular/core";

import { IInfoSectionsQueryResponse } from "./info-section.inteface";

const INFO_SECTIONS_QUERY = gql`
  query InfoSections {
    infoSections {
      contentBlockIds
      variation
      name
      id
    }
  }
`;

@Injectable()
export class InfoSectionService {
  constructor(private readonly apollo: Apollo) {}

  getAllInfoSections() {
    return this.apollo.query<IInfoSectionsQueryResponse>({ query: INFO_SECTIONS_QUERY });
  }
}
