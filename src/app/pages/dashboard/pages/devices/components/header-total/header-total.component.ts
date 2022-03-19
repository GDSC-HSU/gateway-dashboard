import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, DocumentData, onSnapshot, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { DeviceStatus } from 'src/app/models/enums/device_status';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-header-total',
  templateUrl: './header-total.component.html',
  styleUrls: ['./header-total.component.scss']
})
export class HeaderTotalComponent implements OnInit {
  totalConnect = 0;
  totalDisconnect = 0;

  constructor(public deviceService: DeviceService, private fireStore: Firestore, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.deviceService.renderUIDeviceStatistics = () => { this.ref.detectChanges(); }
  }

  countDeviceConnected() {
    return this.deviceService.devices.filter(element => element.status == DeviceStatus.connected).length
  }

  countDeviceDisconnected() {
    return this.deviceService.devices.filter(element => element.status == DeviceStatus.disconnected).length
  }
}
