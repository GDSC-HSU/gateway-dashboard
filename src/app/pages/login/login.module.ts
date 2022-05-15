import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbPopoverModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { LottieModule } from 'ngx-lottie';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
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
    NbIconModule,
    NbPopoverModule,
    LottieModule
  ],
})
export class LoginModule { }
