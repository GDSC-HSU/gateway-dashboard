import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { NbButton, NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { HeaderTotalComponent } from './components/header-total/header-total.component';
import { DeviceCardComponent } from './components/device-card/device-card.component';
import { LogsComponent } from './components/logs/logs.component';


@NgModule({
  declarations: [
    DevicesComponent,
    HeaderTotalComponent,
    DeviceCardComponent,
    LogsComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule
  ]
})
export class DevicesModule { }
