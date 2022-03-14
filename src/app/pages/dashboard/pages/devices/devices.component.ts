import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.getAllDevices();
  }

  getAllDevices() {
    this.deviceService.getDevices().subscribe(value => {
      this.deviceService.devices = value;
    })
  }

}
