import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { NewOrgComponent } from './components/new-org/new-org.component';

@Component({
  selector: 'app-organize',
  templateUrl: './organize.component.html',
  styleUrls: ['./organize.component.scss']
})
export class OrganizeComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.openWithoutBackdropClick();
  }

  openWithoutBackdropClick() {
    this.open(false);
  }

  protected open(closeOnBackdropClick: boolean) {
    this.dialogService.open(NewOrgComponent, { closeOnBackdropClick });
  }

}
