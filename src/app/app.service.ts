import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class AppService {
  private isAppLoadedSubject = new BehaviorSubject<boolean>(false);
  isAppLoaded$: Observable<boolean> = this.isAppLoadedSubject.asObservable();
  setIsAppLoaded(isLoaded: boolean): void {
    this.isAppLoadedSubject.next(isLoaded);
  }
}
