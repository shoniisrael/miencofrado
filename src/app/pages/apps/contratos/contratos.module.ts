import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatInputModule } from "@angular/material/input";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatDatepickerModule } from "@angular/material/datepicker";
//vex
import { PageLayoutModule } from "../../../../@vex/components/page-layout/page-layout.module";
import { BreadcrumbsModule } from "../../../../@vex/components/breadcrumbs/breadcrumbs.module";
import { ContainerModule } from "../../../../@vex/directives/container/container.module";
import { SecondaryToolbarModule } from "../../../../@vex/components/secondary-toolbar/secondary-toolbar.module";
//iconos
import { IconModule } from "@visurel/iconify-angular";
// import { CustomerCreateUpdateModule } from './customer-create-update/customer-create-update.module';
import { ContratosComponent } from "./contratos.component";
import { ContratosRoutingModule } from "./contratos.routing.module";
import {
  ContratosCreateUpdateComponent,
  CloseDialogComponent,
} from "./contratos-create-update/contratos-create-update.component";
import { DatePipe } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { HighlightModule } from "src/@vex/components/highlight/highlight.module";

import { MatNativeDateModule } from "@angular/material/core";
@NgModule({
  declarations: [
    ContratosComponent,
    ContratosCreateUpdateComponent,
    CloseDialogComponent,
  ],
  imports: [
    CommonModule,
    ContratosRoutingModule,
    PageLayoutModule,
    FlexLayoutModule,
    MatGridListModule,
    BreadcrumbsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatStepperModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    SecondaryToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatDialogModule,
    ContainerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTabsModule,
    HighlightModule,
    MatNativeDateModule,
  ],
  providers: [DatePipe],
  entryComponents: [CloseDialogComponent],
})
export class ContratosModule {}
