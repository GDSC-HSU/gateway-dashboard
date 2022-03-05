import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbFormFieldModule,
    NbInputModule,
    NbSpinnerModule,
    NbIconModule
  ]
})
export class LoginModule { }
