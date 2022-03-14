import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, DocumentData, onSnapshot, QueryDocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import { DeviceStatus } from 'src/app/models/device_status';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-header-total',
  templateUrl: './header-total.component.html',
  styleUrls: ['./header-total.component.scss']
})
export class HeaderTotalComponent implements OnInit {
  totalConnect = 0;
  totalDisconnect = 0;

  constructor(public deviceService: DeviceService, private fireStore: Firestore) { }

  ngOnInit(): void {
    this.listenDeviceCount();
  }

  listenDeviceCount() {
    onSnapshot(collection(this.fireStore, "device_status"), {
      next: (value: QuerySnapshot<DocumentData>) => {
        this.countConnect(value.docs);
      },
    })
  }
  countConnect(array: Array<QueryDocumentSnapshot<DocumentData>>) {
    let countConnect = 0;
    let countDisconnect = 0;
    array.forEach(deviceStatusSnap => {
      let deviceStatus = deviceStatusSnap.data() as DeviceStatus;
      if (deviceStatus.status) {
        countConnect++;
      }
      else {
        countDisconnect++;
      }
    });
    this.totalConnect = countConnect;
    this.totalDisconnect = countDisconnect;
  }
}
