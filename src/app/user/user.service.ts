import { Apollo, gql } from "apollo-angular";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

import { IMeResponse } from "./user.inteface";

const ME_QUERY = gql`
  query {
    me {
      id
      email
      firstName
      lastName
    }
  }
`;

@Injectable()
export class UserService {
  constructor(private apollo: Apollo) {}

  getMe() {
    return this.apollo.query<IMeResponse>({ query: ME_QUERY }).pipe(map((response) => response.data.me));
  }

  readMe() {
    return this.apollo.client.readQuery({ query: ME_QUERY });
  }
}
