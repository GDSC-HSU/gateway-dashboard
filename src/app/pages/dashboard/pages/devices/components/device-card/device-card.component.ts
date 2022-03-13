import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.scss']
})
export class DeviceCardComponent implements OnInit {
  isLoading: boolean = false;
  devices: Array<Device> = [];
  constructor(private deviceService: DeviceService) { }
  ngOnInit(): void {
    this.getAllDevices();
  }

  getAllDevices() {
    this.isLoading = true;
    this.deviceService.getDevices().subscribe(value => {
      this.devices = value;
      this.isLoading = false;
    })
  }
}
