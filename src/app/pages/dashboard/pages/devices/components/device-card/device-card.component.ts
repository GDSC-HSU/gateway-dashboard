import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device/device.service';
import { CreateDeviceDialogComponent } from '../../dialog/create-device-dialog/create-device-dialog.component';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss']
})
export class DeviceCardComponent implements OnInit {
  @Input() loading!: boolean;
  constructor(private dialogService: NbDialogService, public deviceService: DeviceService, private ref: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.deviceService.renderUIDeviceStatus = () => { this.ref.detectChanges() }
  }

  openAddNewDialog() {
    this.dialogService.open(CreateDeviceDialogComponent);
  }
}
