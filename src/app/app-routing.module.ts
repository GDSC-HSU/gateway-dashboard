import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard]  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),},
  { path: 'organization', loadChildren: () => import('./pages/dashboard/pages/organization/organization.module').then(m => m.OrganizationModule) },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
