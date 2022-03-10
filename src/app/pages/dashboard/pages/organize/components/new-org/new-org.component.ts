import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Organization } from 'src/app/models/organization';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-org',
  templateUrl: './new-org.component.html',
  styleUrls: ['./new-org.component.scss']
})
export class NewOrgComponent implements OnInit {

  @ViewChild("fileUpload") labelFileUpload?: ElementRef;
  filePath: string | undefined;
  myForm: FormGroup = new FormGroup({
    uid: new FormControl(''),
    oid: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
  });;
  constructor(private authService: AuthService, private organizationService: OrganizationService, private http: HttpClient) {
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
    let formData: FormData = new FormData();
    formData.append("id", this.myForm.value.oid);
    formData.append("name", this.myForm.value.name);
    formData.append("image", this.myForm.value.file);
    let response = await firstValueFrom(this.organizationService.saveOrganization(formData));
    console.log(response);
  }
}
