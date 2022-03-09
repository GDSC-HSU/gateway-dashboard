import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Organization } from 'src/app/models/organization';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';

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
    fileSource: new FormControl('', [Validators.required])
  });;
  constructor(private authService: AuthService, private organizationService: OrganizationService) {
  }


  ngOnInit(): void {
    this.myForm.patchValue({ uid: this.authService.user!.uid });
  }

  imagePreview(e: any) {
    const file = e.target.files[0];

    this.myForm.patchValue({
      img: file
    });

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  dropImage(files: any) {
    const file = files[0];

    this.myForm.patchValue({
      file: file
    });

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
    let organization: Organization = {
      id: this.myForm.value.oid,
      name: this.myForm.value.name,
      image: this.myForm.value.file,
    }
    const firstNumber = await firstValueFrom(this.organizationService.saveOrganization(organization));
    console.log(firstNumber);
  }
}
