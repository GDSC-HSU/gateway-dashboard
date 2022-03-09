import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-org',
  templateUrl: './new-org.component.html',
  styleUrls: ['./new-org.component.scss']
})
export class NewOrgComponent implements OnInit {

  @ViewChild("labelFileUpload") labelFileUpload?: ElementRef;
  filePath: string | undefined;
  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });;
  constructor() {
  }


  ngOnInit(): void {
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

  uploadClick(){
    this.labelFileUpload!.nativeElement.click();
  }
}
