import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbButtonModule, NbSidebarService, NbCardModule, NbDialogModule, NbStepperModule, NbInputModule, NbIconModule, NbSpinnerModule, NbMenuModule } from '@nebular/theme';
import { DragDropFileUploadDirective } from 'src/app/directives/drag-drop-file-upload.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbMenuModule
  ],
  providers: [NbSidebarService,]
})
export class DashboardModule { }
