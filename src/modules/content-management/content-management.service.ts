import { MatTabGroup } from "@angular/material/tabs";
import { Injectable } from "@angular/core";

@Injectable()
export class ContentManagementService {
  tabGroup?: MatTabGroup;

  setTabGroup(contentManagementTabGroup: MatTabGroup) {
    this.tabGroup = contentManagementTabGroup;
  }

  changeContentManagementTab(index: number) {
    this.tabGroup && (this.tabGroup.selectedIndex = index);
  }
}
