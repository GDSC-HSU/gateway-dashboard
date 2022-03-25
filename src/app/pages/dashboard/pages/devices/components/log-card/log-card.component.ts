import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { onSnapshot } from 'firebase/firestore';
import { Log } from 'src/app/models/log';
import { DeviceService } from 'src/app/services/device/device.service';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-log-card',
  templateUrl: './log-card.component.html',
  styleUrls: ['./log-card.component.scss']
})
export class LogCardComponent implements OnInit {
  @Input()log!: Log;
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
  } 

  getTime(){
    let time = new Date(this.log.timestamp)
    let myTimeParse = `${this.padTime(time.getHours())}:${this.padTime(time.getMinutes())}:${this.padTime(time.getSeconds())} ${this.padTime(time.getDay())}/${this.padTime(time.getMonth())}/${time.getFullYear()}`
    return myTimeParse;
  }

  padTime(time: number): string{
    return time.toString().padStart(2,"0");
  }
  
  getLocation(){
    return this.deviceService.devices.find(element => element.id == this.log.did)?.location!;
  }
}
