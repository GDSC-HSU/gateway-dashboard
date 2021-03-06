import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { NewOrgComponent } from '../../components/new-org/new-org.component';

@Component({
  selector: 'app-create-org-dialog',
  templateUrl: './create-org-dialog.component.html',
  styleUrls: ['./create-org-dialog.component.scss'] 
})
export class CreateOrgDialogComponent implements OnInit {

  isCreateLoading = false;
  stepperIndex: number = 0;
  @ViewChild("fileUpload") labelFileUpload?: ElementRef;
  filePath: string | undefined;
  myForm: FormGroup = new FormGroup({
    uid: new FormControl(''),
    oid: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
  });
  constructor(
    private authService: AuthService,
    private organizationService: OrganizationService,
    private router: Router,
    public dialogRef: NbDialogRef<NewOrgComponent>,
  ) {
  }


  ngOnInit(): void {
   
    this.myForm.patchValue({ uid: this.authService.user!.uid });
  }

 

  dropImage(files: any, isDrop: boolean) {
    let file;
    if (isDrop) {
      file = files[0];
    }
    else {
      file = files.target.files[0];
    }

    this.myForm.patchValue({
      file: file
    });

    this.myForm.get('file')!.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  uploadClick() {
    this.labelFileUpload!.nativeElement.click();
  }

  async onSubmit() {
    this.isCreateLoading = true;
    let formData: FormData = new FormData();
    formData.append("id", this.myForm.value.oid);
    formData.append("name", this.myForm.value.name);
    formData.append("image", this.myForm.value.file);
    this.organizationService.saveOrganization(formData).subscribe({
      next: (value) => {
        this.isCreateLoading = false;
        this.stepperIndex = 2;
      },
      error: (e: HttpErrorResponse) => {

      }
    });
  }

  letGoClick() {
    this.dialogRef.close();
    this.router.navigate(["/dashboard/device"]);
  }
  options: AnimationOptions = {
    path: '/assets/lottie/done.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }


}
