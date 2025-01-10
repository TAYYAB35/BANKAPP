// auth-config.ts
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // URL of the Identity Provider
  issuer: 'https://accounts.snapchat.com',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '89cfcd37-a286-458d-ac8f-a217cd929df1',

  responseType: 'token',

  // Scopes for the permissions the client should request
  scope: 'openid profile',

  // Indicates if the user should be automatically redirected to the login screen
  // if an access token cannot be acquired.
  //   silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  silentRefreshRedirectUri: window.location.origin,
  showDebugInformation: true, // Enable to see more logs in the console
  requireHttps: true, // Ensure correct if running on HTTP during development
  sessionChecksEnabled: true,
};
