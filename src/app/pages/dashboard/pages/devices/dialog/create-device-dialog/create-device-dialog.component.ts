import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbPopoverDirective, NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';
import { Device } from 'src/app/models/device';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-create-device-dialog',
  templateUrl: './create-device-dialog.component.html',
  styleUrls: ['./create-device-dialog.component.scss']
})
export class CreateDeviceDialogComponent implements OnInit {

  qrCodeString?: string;
  deviceCreateFromGroup: FormGroup = new FormGroup({
    nameControl: new FormControl('', [Validators.required]),
    locationControl: new FormControl('', [Validators.required]),
    tagControl: new FormControl('')
  })
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {

  }

  trees: Set<string> = new Set([]);

  onTagRemove(tagToRemove: NbTagComponent): void {
    this.trees.delete(tagToRemove.text);
  }

  onTagAdd({ value, input }: NbTagInputAddEvent): void {
    if (value) {
      this.trees.add(value)
    }
    input.nativeElement.value = '';
  }

  createClick() {
    let device: Device = {
      name: this.deviceCreateFromGroup.get('nameControl')!.value,
      location: this.deviceCreateFromGroup.get("locationControl")!.value,
      tag: this.deviceCreateFromGroup.get("tagControl")!.value
    }
    this.deviceService.createDevice(device).subscribe(value => {
      this.qrCodeString = JSON.stringify(value)
    });
  }
}
