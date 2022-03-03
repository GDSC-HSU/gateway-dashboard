import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OrganizeComponent } from './pages/organize/organize.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: 'device',
        loadChildren: () => import('./pages/devices/devices.module').then(m => m.DevicesModule)
      },
      {
        path: 'organize',
        component: OrganizeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
