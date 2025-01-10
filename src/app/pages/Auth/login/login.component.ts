declare var google: any;
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../Auth/AuthService';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { SharedService } from '../../../services/shared.service';
import { SharedModule } from '../../../shared/shared.module';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgZorroAntdModule,
  ],
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isshowPassword: boolean = false;
  currentLanguage: any;
  recaptchaResponse = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private sharedService: SharedService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  isLoading: boolean = false;
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }

    // this.languageService.currentLanguage$.subscribe((lang) => {
    //   this.currentLanguage = lang;
    //   this.translate.use(this.currentLanguage);
    // });
    // const userDetails = localStorage.getItem('userDetails');
    // if (userDetails && window.location.pathname == '/auth/login') {
    //   this.router.navigate(['/home']);
    // }

    google.accounts.id.initialize({
      client_id: '539887466213-eb830e4mvb4012pl2c7lfu2siaknfar9.apps.googleusercontent.com',
      callback: (res: any) => this.handleLogin(res),
    });
    google.accounts.id.renderButton(document.getElementById('login-google-btn'), {
      theme: 'filled_white',
      size: 'large',
      shape: 'circle',
      width: 230,
    });
  }

  isRequired(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    if (control) {
      return control.hasValidator(Validators.required);
    }
    return false;
  }

  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }
  handleLogin(res: any) {
    // decode the token
    if (res) {
      this.isLoading = true;
      const payLoad = this.decodeToken(res.credential);
      console.log('payLoad', payLoad);
      // store it in session
      let user = payLoad;
      let obj: any = {};
      obj['firstName'] = user.given_name;
      obj['lastName'] = user.family_name;
      obj['picture'] = user.picture;
      obj['email'] = user.email;
      obj['usertype'] = 'google';
      this.authService.login('LOGIN', obj).subscribe(
        (response) => {
          if (response.successFlag) {
            this.isLoading = false;
            this.authService.setToken(response.data);
            this.router.navigate(['/home']);
          } else {
            this.sharedService.createNotification('error', response?.message);
            this.isLoading = false;
          }
        },
        (error) => {
          console.error('failed', error);
        },
      );
      // navigate to home
      // this.router.navigate(['/home']);
    }
  }
  onCaptchaResolved(captchaResponse: any): void {
    this.recaptchaResponse = captchaResponse;
  }
  
  onSubmit() {
    this.loginForm.markAllAsTouched();
    this.sharedService.showLoader();
    if (!this.recaptchaResponse) {
      this.sharedService.hideLoader();
      if (this.loginForm.invalid) {
        Object.keys(this.loginForm.controls).forEach((field) => {
          const control = this.loginForm.get(field);
          control?.markAsTouched({ onlySelf: true });
        });
      }
      this.sharedService.createNotification('warning', 'Please enable captcha'); 
      return;
    }
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.sharedService.hideLoader();
      this.loginForm.value['gRecaptchaResponse'] = this.recaptchaResponse;
      this.authService.login('LOGIN', this.loginForm.value).subscribe(
        (response) => {
          if (response.successFlag) {
            this.authService.setToken(response.data);
            this.router.navigate(['/home']);
            this.isLoading = false;
          } else {
            this.sharedService.createNotification('error', response?.message);
            this.isLoading = false;
          }
        },
        (error) => {
          this.isLoading = false;
          this.sharedService.createNotification('error', error?.message);
          console.error('failed', error);
        },
      );
    }
  }

  togglePasswordType() {
    this.isshowPassword = !this.isshowPassword;
  }
}
