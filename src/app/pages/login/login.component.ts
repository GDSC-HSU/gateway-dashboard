import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { LoginPageConstraintText } from 'src/app/contraints/text/loginpage.constraint.text';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  // displayNameControl = new FormControl();

  emailControl = new FormControl("", [Validators.required, Validators.email]);
  passwordControl = new FormControl("", [Validators.required]);
  rePasswordControl = new FormControl("", [Validators.required]);


  constructor(private authService: AuthService, private toastService: NbToastrService, private router: Router) { }


  ngOnInit(): void {
  }

  isLoading: boolean = false;
  isRegisterTab = true;
  showPassword = false;


  async createAccountClick() {
    this.isLoading = true;

    let user: User = {
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
    this.isLoading = true;

    let user: User = {
      email: this.emailControl.value,
      password: this.passwordControl.value,
    }

    await this.authService.login(user).then(() => {
      this.toastService.show(LoginPageConstraintText.loginSuccessMess, LoginPageConstraintText.loginSuccessTitle, { status: "success" });
    }).catch((e: Error) => {
      this.toastService.show(e.message, LoginPageConstraintText.loginFailureTitle);
    })

    //this.isLoading = false;
    this.router.navigate(["/dashboard"]);
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
}
