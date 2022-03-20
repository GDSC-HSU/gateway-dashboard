import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { NbBadgeModule, NbButton, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbSpinnerModule, NbTagModule, NbTooltipModule } from '@nebular/theme';
import { HeaderTotalComponent } from './components/header-total/header-total.component';
import { DeviceCardComponent } from './components/device-card/device-card.component';
import { LogsComponent } from './components/logs/logs.component';
import { DeviceCardDetailComponent } from './components/device-card-detail/device-card-detail.component';
import { CreateDeviceDialogComponent } from './dialog/create-device-dialog/create-device-dialog.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogCardComponent } from './components/log-card/log-card.component';


@NgModule({
  declarations: [
    DevicesComponent,
    HeaderTotalComponent,
    DeviceCardComponent,
    LogsComponent,
    DeviceCardDetailComponent,
    CreateDeviceDialogComponent,
    LogCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DevicesRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbBadgeModule,
    NbTooltipModule,
    NbTagModule,
    NbInputModule,
    QRCodeModule,
    NbSpinnerModule,
    NbListModule,
  ]
})
export class DevicesModule { }
