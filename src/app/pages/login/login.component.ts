import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AnimationOptions } from 'ngx-lottie';
import { firstValueFrom } from 'rxjs';
import { LoginPageConstraintText } from 'src/app/contraints/text/loginpage.constraint.text';
import { AppUser } from 'src/app/models/app-user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrganizationService } from 'src/app/services/organization/organization.service';
import { CustomValidator } from 'src/app/utils/custom-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailControl = new FormControl("", [Validators.required, Validators.email]);
  passwordControl = new FormControl("", [Validators.required, Validators.minLength(6)]);
  rePasswordControl = new FormControl("", [Validators.required,]);


  constructor(private http: HttpClient, private authService: AuthService, private orgService: OrganizationService, private toastService: NbToastrService, private router: Router) {
    this.rePasswordControl.addValidators(CustomValidator.mustMatch(this.passwordControl, this.rePasswordControl));
    this.rePasswordControl.updateValueAndValidity();
  }


  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: '../../assets/lottie/research.json',
  };

  isLoading: boolean = false;
  isRegisterTab = false;
  showPassword = false;

  async createAccountClick() {
    if (this.emailControl.invalid || this.passwordControl.invalid || this.rePasswordControl.invalid) {
      this.emailControl.markAsTouched();
      this.passwordControl.markAsTouched();
      this.rePasswordControl.markAsTouched();
      return;
    }
    this.isLoading = true;

    let user: AppUser = {
      email: this.emailControl.value,
      password: this.passwordControl.value
    }

    await this.authService.createAccount(user)
      .then(() => {
        this.toastService.show(LoginPageConstraintText.createSuccessMess, LoginPageConstraintText.createSuccessTitle, { status: "success" });
        this.isRegisterTab = false;
        this.emailControl.setValue(user.email);
      }).catch((e: Error) => {
        this.toastService.show(e.message, LoginPageConstraintText.createFailureTitle, { status: "danger" });
      });

    this.isLoading = false;
  }

  async loginClick() {
    if (this.emailControl.invalid || this.passwordControl.invalid) {
      this.emailControl.markAsTouched();
      this.passwordControl.markAsTouched();
      return;
    }
    this.isLoading = true;

    let user: AppUser = {
      email: this.emailControl.value,
      password: this.passwordControl.value,
    }

    await this.authService.login(user).then(() => {
      this.toastService.show(LoginPageConstraintText.loginSuccessMess, LoginPageConstraintText.loginSuccessTitle, { status: "success" });
      this.orgService.getOrganization().subscribe({
        next: (value) => {
          this.router.navigate(["/dashboard/device"]);
        },
        error: (e: HttpErrorResponse) => {
          if (e.status == 400) {
            this.router.navigate(["/dashboard/organization/create"]);
          }
        },
      });
    }).catch((e: Error) => {
      this.toastService.show(e.message, LoginPageConstraintText.loginFailureTitle, {status: "danger"});
      this.isLoading = false;
      return;
    });
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  getStatus(formControl: FormControl) {
    if ((formControl.dirty || formControl.touched) && formControl.invalid) {
      return "danger";
    }
    return "basic";
  }

  getEmailError(): string {
    if (this.emailControl.errors?.['required']) {
      return "Email required!";
    }
    if (this.emailControl.errors?.["email"]) {
      return "Email invalid!";
    }
    return "";
  }

  getPasswordError(): string {
    if (this.passwordControl.errors?.['required']) {
      return "Password required!";
    }
    if (this.passwordControl.errors?.["minlength"]) {
      return "Must be at least 6 character";
    }
    return "";
  }

  getPasswordConfirmError(): string {
    if (this.rePasswordControl.errors?.['mustMatch']) {
      return "Confirm password not match!";
    }
    if (this.rePasswordControl.errors?.['required']) {
      return "Confirm password required!";
    }
    return "";
  }

  onTabChange(value: any) {
    if (value.tabTitle == "Register") {
      this.isRegisterTab = true;
    } else {
      this.isRegisterTab = false;
    }
    this.emailControl.markAsUntouched();
    this.passwordControl.markAsUntouched();
    this.rePasswordControl.markAsUntouched();
  }
}
function next(next: any, arg1: (value: any) => void, erorr: any, arg3: (e: HttpErrorResponse) => void) {
  throw new Error('Function not implemented.');
}

