import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { NewOrgComponent } from './components/new-org/new-org.component';
import { DragDropFileUploadDirective } from 'src/app/directives/drag-drop-file-upload.directive';
import { LottieModule } from 'ngx-lottie';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbSpinnerModule, NbStepperModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoOrgComponent } from './components/info-org/info-org.component';
import { CreateOrgDialogComponent } from './dialog/create-org-dialog/create-org-dialog.component';


@NgModule({
  declarations: [
    OrganizationComponent,
    NewOrgComponent,
    DragDropFileUploadDirective,
    InfoOrgComponent,
    CreateOrgDialogComponent,
  ],
  imports: [
    NbSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    OrganizationRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbDialogModule.forChild(),
    NbStepperModule,
    NbInputModule,
    NbIconModule,
    LottieModule
  ]
})
export class OrganizationModule { }
