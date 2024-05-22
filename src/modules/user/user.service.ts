import { Observable, catchError, map, throwError } from "rxjs";
import { Apollo, gql } from "apollo-angular";
import { Injectable } from "@angular/core";

import { AuthService } from "../auth/auth.service";

import { IUser, IMeQueryResponse } from "./user.inteface";

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
  constructor(
    private apollo: Apollo,
    private readonly authService: AuthService
  ) {}

  getMe(): Observable<IUser> {
    return this.apollo.query<IMeQueryResponse>({ query: ME_QUERY }).pipe(
      catchError((error) => {
        this.authService.logout();
        return throwError(error);
      }),
      map((response) => response.data.me)
    );
  }

  readMe(): IUser | undefined {
    return this.apollo.client.readQuery<IMeQueryResponse>({ query: ME_QUERY })?.me;
  }
}
