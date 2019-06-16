import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FileUploadModule } from "ng2-file-upload";
import { MatchHeightDirective, NavbarComponent } from ".";
import { MaterialModule } from "../material.module";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CurrencyService } from "./calculator/currency.service";
import { CheckPipe } from "./checked/check.pipe";
import { DataStoreService } from "./data-store/data-store-service";
import { EditorComponent } from "./editor/editor.component";
import { EventBusService } from "./event-bus/event-bus.service";
import { KpiBarComponent } from "./kpi-bar/kpi-bar.component";
import { ScreenService } from "./screen/screen.service";
import { SidePanelComponent } from "./side-panel/side-panel.component";
import { UploadComponent } from "./upload/upload.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

const mods = [
  UploadComponent,
  NavbarComponent,
  MatchHeightDirective,
  CalculatorComponent,
  EditorComponent,
  CheckPipe,
  SidePanelComponent,
  KpiBarComponent,
  PageNotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FileUploadModule
  ],
  declarations: mods,
  exports: mods,
  providers: [CurrencyService, DataStoreService, EventBusService, ScreenService]
})
export class SharedModule {}
