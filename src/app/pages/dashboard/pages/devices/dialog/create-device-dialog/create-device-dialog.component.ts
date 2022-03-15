import { Component, OnInit, ViewChild } from '@angular/core';
import { NbPopoverDirective, NbTagComponent, NbTagInputAddEvent } from '@nebular/theme';

@Component({
  selector: 'app-create-device-dialog',
  templateUrl: './create-device-dialog.component.html',
  styleUrls: ['./create-device-dialog.component.scss']
})
export class CreateDeviceDialogComponent implements OnInit {

  qrCodeString: string = '"id": "850PVltBVccOV1JTKg4i","accessKey": "thHknCr-Ibt9Gc7T0iNIs","apiKey": "123","oid": "Cao1-ORG","endpoint": "https://gdsc-hsu.xyz","mqttUserName": "GDSCHSU","mqttPassword": "Mailaanhem123"';

  constructor() { }

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

  createClick(){
  }
}
