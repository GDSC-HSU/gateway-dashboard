import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  onSnapshot,
  doc,
  DocumentData,
  CollectionReference,
  getDoc,
  FirestoreError
} from '@angular/fire/firestore';
import { Device } from 'src/app/models/device';
import { DeviceStatus } from 'src/app/models/enums/device_status';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  prefix = "/device";
  deviceStatusCollection: CollectionReference<DocumentData>;
  devices: Array<Device> = [];
  renderUIDevice: Function = () => {};

  constructor(private http: HttpClient, private authService: AuthService, private fireStore: Firestore) {
    this.deviceStatusCollection = collection(this.fireStore, 'device_status');
  }

  getDevices() {
    this.http.get<Array<Device>>(environment.endpoint + this.prefix, {
      headers: {
        "token": this.authService.token,
        "api-x-key": environment.apiKey,
      }
    }).subscribe(value => this.devices = value);
  }

  listenStatus(did: string) {
    let deviceDocument = doc(this.deviceStatusCollection, did);
    onSnapshot(deviceDocument, {
      next: (value) => {
        let deviceStatus = value.data();
        let device = this.devices.find(element => element.id == did);
        if (deviceStatus!["status"]) {
          device!.status = DeviceStatus.connected
        } else {
          device!.status = DeviceStatus.disconnected
        }
        this.renderUIDevice();
      },
      error: (err: FirestoreError) => console.error(err),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  checkCreated(did: string) {
    let deviceDocument = doc(this.deviceStatusCollection, did);
    getDoc(deviceDocument).then(value => {
      if (value.data()) {
        this.listenStatus(did);  
      } else {
        let device = this.devices.find(element => element.id == did);
        device!.status = DeviceStatus.created;
      }
    });
  }

  createDevice(device: Device) {
    return this.http.post(environment.endpoint + this.prefix + "/did-new", device, {
      headers: {
        "token": this.authService.token,
        "api-x-key": environment.apiKey,
      },
    })
  }
}
