
import { Component, OnInit} from '@angular/core';
import {  NbDialogService } from '@nebular/theme';
import { CreateOrgDialogComponent } from '../../dialog/create-org-dialog/create-org-dialog.component';


@Component({
  selector: 'app-new-org',
  templateUrl: './new-org.component.html',
  styleUrls: ['./new-org.component.scss']
})
export class NewOrgComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }
  ngOnInit(): void {
    this.openWithoutBackdropClick();
  }
  openWithoutBackdropClick() {
    this.open(false);
  }

  protected open(closeOnBackdropClick: boolean) {
    this.dialogService.open(CreateOrgDialogComponent, { closeOnBackdropClick });
  }

}
