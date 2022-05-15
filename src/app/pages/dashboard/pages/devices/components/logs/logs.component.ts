import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  constructor(public logService: LogService, private organizationService: OrganizationService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.logService.renderLogUI = () => { this.ref.detectChanges(); this.scrollToBottom(); };
    this.organizationService.getOrganization().subscribe(org => {
      this.logService.getLog(org.id);
    });
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
