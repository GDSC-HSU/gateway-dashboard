import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbTabsetModule } from '@nebular/theme';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbInputModule
  ]
})
export class LoginModule { }
