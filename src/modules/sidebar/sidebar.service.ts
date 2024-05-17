import { Injectable, signal } from "@angular/core";

import { IS_SIDEBAR_EXPANDED_STORAGE_KEY } from "../../constants/localStorageKeys";

@Injectable()
export class SidebarService {
  isSidebarExpanded = signal(localStorage.getItem(IS_SIDEBAR_EXPANDED_STORAGE_KEY) === "true");

  toggleSidebar() {
    const nextCondition = !this.isSidebarExpanded();
    this.isSidebarExpanded.set(nextCondition);
    localStorage.setItem(IS_SIDEBAR_EXPANDED_STORAGE_KEY, nextCondition.toString());
  }

  setDefaultSidebarCondition() {
    if (!localStorage.getItem(IS_SIDEBAR_EXPANDED_STORAGE_KEY)) {
      localStorage.setItem(IS_SIDEBAR_EXPANDED_STORAGE_KEY, "true");
      this.isSidebarExpanded.set(true);
    }
  }
}
