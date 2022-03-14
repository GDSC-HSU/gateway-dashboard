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

  constructor(private deviceService: DeviceService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.listenStatus();
  }

  observerStatus = {
    next: (value: DocumentSnapshot<DocumentData>) => {
      let deviceStatus = value.data();
      if (deviceStatus!["status"]) {
        this.status = DeviceStatus.connected;
      }
      else {
        this.status = DeviceStatus.disconnected;
      }
      this.ref.detectChanges();
    },
    error: (err: FirestoreError) => console.error(err),
    complete: () => console.log('Observer got a complete notification'),
  };

  listenStatus() {
    this.deviceService.checkCreated(this.device!.id!).then(value => {
      if (value.data()) {
        let dataSnapshot = this.deviceService.listenStatus(this.device!.id!, this.observerStatus);
      } else {
        this.status = DeviceStatus.created;
      }
    })
  }

  getTextStatus() {
    if (this.status == DeviceStatus.connected) {
      return "online";
    }
    else if (this.status == DeviceStatus.disconnected) {
      return "offline";
    }
    return "pending";
  }

  getStatus(){
    if (this.status == DeviceStatus.connected) {
      return "success";
    }
    else if (this.status == DeviceStatus.disconnected) {
      return "danger";
    }
    return "warning";
  }

}
