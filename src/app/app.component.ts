import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthService } from './Auth/AuthService';
import { BrowserModule } from '@angular/platform-browser';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  FacebookLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { LoaderComponent } from '@shared/loader/loader.component';
import { SharedService } from '@services/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private authService: SocialAuthService,
    private sharedService: SharedService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.sharedService.generateGUID();

    // const userDetails = localStorage.getItem('userDetails');
    // if (userDetails && window.location.pathname == '/auth/login') {
    //   this.router.navigate(['/home']);
    // }
  }
}
