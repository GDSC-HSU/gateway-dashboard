import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { NbButton, NbButtonModule, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    DevicesComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class DevicesModule { }
