import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { DocumentData, DocumentSnapshot, FirestoreError, onSnapshot } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Device } from 'src/app/models/device';
import { DeviceStatus } from 'src/app/models/enums/device_status';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-device-card-detail',
  templateUrl: './device-card-detail.component.html',
  styleUrls: ['./device-card-detail.component.scss']
})
export class DeviceCardDetailComponent implements OnInit {
  @Input() device?: Device
  status: DeviceStatus = DeviceStatus.disconnected;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.listenStatus();
  }

  listenStatus() {
    this.deviceService.checkCreated(this.device!.id!);
  }

  getTextStatus() {
    if (this.device?.status == DeviceStatus.connected) {
      return "online";
    }
    else if (this.device?.status == DeviceStatus.disconnected) {
      return "offline";
    }
    return "pending";
  }

  getStatus(){
    if (this.device?.status == DeviceStatus.connected) {
      return "success";
    }
    else if (this.device?.status == DeviceStatus.disconnected) {
      return "danger";
    }
    return "warning";
  }

}
