import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoOrgComponent } from './components/info-org/info-org.component';
import { NewOrgComponent } from './components/new-org/new-org.component';
import { OrganizationComponent } from './organization.component';

const routes: Routes = [
  {
    path: 'create', component: NewOrgComponent
  },
  {
    path: 'info', component: InfoOrgComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'info',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
