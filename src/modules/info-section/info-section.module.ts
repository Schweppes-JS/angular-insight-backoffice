import { NgModule } from "@angular/core";

import { InfoSectionComponent } from "./info-section.components";
import { InfoSectionService } from "./info-section.service";

@NgModule({ providers: [InfoSectionService], declarations: [InfoSectionComponent] })
export class InfoSectionModule {}
