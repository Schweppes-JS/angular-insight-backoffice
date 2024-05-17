import { Apollo, gql } from "apollo-angular";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { IUser, MeQuery } from "./user.inteface";

const ME_QUERY = gql`
  query Me {
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

  getMe(): Observable<IUser> {
    return this.apollo.query<MeQuery>({ query: ME_QUERY }).pipe(map((response) => response.data.me));
  }

  readMe(): IUser | undefined {
    return this.apollo.client.readQuery<MeQuery>({ query: ME_QUERY })?.me;
  }
}
