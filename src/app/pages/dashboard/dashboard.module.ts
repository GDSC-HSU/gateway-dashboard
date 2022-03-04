import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OrganizeComponent } from './pages/organize/organize.component';
import { RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbButtonModule, NbSidebarService, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    DashboardComponent,
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
  ],
  providers: [NbSidebarService,]
})
export class DashboardModule { }
