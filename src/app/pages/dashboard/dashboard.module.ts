import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbButtonModule, NbSidebarService, NbCardModule, NbDialogModule, NbStepperModule, NbInputModule, NbIconModule } from '@nebular/theme';
import { NewOrgComponent } from './pages/organize/components/new-org/new-org.component';
import { OrganizeComponent } from './pages/organize/organize.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NewOrgComponent,
    OrganizeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbCardModule,
    NbDialogModule.forChild(),
    NbStepperModule,
    NbInputModule,
    NbIconModule
  ],
  providers: [NbSidebarService,]
})
export class DashboardModule { }
