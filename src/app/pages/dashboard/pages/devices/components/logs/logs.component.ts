import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  constructor(public logService: LogService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.logService.renderLogUI = () => { this.ref.detectChanges() }
    this.logService.getLog("nextword");
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer!.nativeElement.scrollTop = this.myScrollContainer!.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }

  renderLogCard() {
    this.ref.detectChanges();
  }
}
