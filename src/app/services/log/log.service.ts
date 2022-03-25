import { Injectable } from '@angular/core';
import { collection, CollectionReference, DocumentData, Firestore, orderBy, query, where } from '@angular/fire/firestore';
import { onSnapshot } from 'firebase/firestore';
import { Log } from 'src/app/models/log';
import { DeviceService } from '../device/device.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logCollection: CollectionReference<DocumentData>;
  logArray: Array<Log> = [];
  renderLogUI: Function = () => { };
  constructor(private fireStore: Firestore, private deviceService: DeviceService) {
    this.logCollection = collection(this.fireStore, 'data');
  }

  getLog(oid: String) {
    let logQ = query(this.logCollection, where("oid", "==", oid));
    onSnapshot(logQ, (snapshot) => {
      let tempArray: Array<Log> = [];
      snapshot.forEach(value => {
        tempArray.push(value.data() as Log)
      });
      this.logArray = tempArray.sort((logA, logB) => logA.timestamp - logB.timestamp);
      this.renderLogUI();
    })
  }
}
