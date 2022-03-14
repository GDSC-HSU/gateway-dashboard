import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  onSnapshot,
  doc,
  DocumentData,
  CollectionReference,
  getDoc,
  DocumentSnapshot,
  query,
  QuerySnapshot
} from '@angular/fire/firestore';
import { Observer } from 'rxjs';
import { Device } from 'src/app/models/device';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  prefix = "/device";
  deviceStatusCollection: CollectionReference<DocumentData>;
  devices: Array<Device> = [];

  constructor(private http: HttpClient, private authService: AuthService, private fireStore: Firestore) {
    this.deviceStatusCollection = collection(this.fireStore, 'device_status');
  }

  getDevices() {
    return this.http.get<Array<Device>>(environment.endpoint + this.prefix, {
      headers: {
        "token": this.authService.token,
        "api-x-key": environment.apiKey,
      }
    });
  }

  listenStatus(did: string, observer: Observer<DocumentSnapshot<DocumentData>>) {
    let deviceDocument = doc(this.deviceStatusCollection, did);
    onSnapshot(deviceDocument, observer);
  }

  checkCreated(did: string) {
    let deviceDocument = doc(this.deviceStatusCollection, did);
    return getDoc(deviceDocument);
  }
  
  createDevice() { }
}
