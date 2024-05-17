import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AUTH_TOKEN_STORAGE_KEY } from "../../constants/localStorageKeys";
import { Any } from "src/types/any";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<Any>, next: HttpHandler): Observable<HttpEvent<Any>> {
    const token = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    const authRequest = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    return next.handle(authRequest);
  }
}
