import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';

const authConfig: AuthConfig = {
  redirectUri: window.location.origin + '/auth/callback',
  clientId: '948fecf0-febf-419a-ad20-ee3fb3459a08',
  scope: 'user.display_name',
  responseType: 'code',
  oidc: true,
  loginUrl: 'https://accounts.snapchat.com/accounts/oauth2/auth',
  tokenEndpoint: 'https://accounts.snapchat.com/accounts/oauth2/token',
};

@Injectable({
  providedIn: 'root',
})
export class SnapAuthService {
  constructor(private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }
}
