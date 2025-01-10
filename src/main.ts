import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Router, provideRouter, withInMemoryScrolling, InMemoryScrollingOptions } from '@angular/router';
import { routes } from './app/app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app/constants/interceptor';
import { SocialAuthServiceConfig, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { provideOAuthClient } from 'angular-oauth2-oidc';

// Define the scroll configuration
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

// Function to provide SocialAuthServiceConfig
// export function provideSocialAuthServiceConfig(): SocialAuthServiceConfig {
//   return {
//     autoLogin: false,
//     providers: [
//       {
//         id: FacebookLoginProvider.PROVIDER_ID,
//         provider: new FacebookLoginProvider('1036652274526781'),
//       },
//     ],
//   };
// }

// Bootstrap the Angular application with the provided configurations
bootstrapApplication(AppComponent, {
  providers: [
    ...(appConfig.providers || []), // Include existing providers from appConfig
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [Router],
    },
    provideOAuthClient(),
    provideRouter(routes, withInMemoryScrolling(scrollConfig)), // Provide routing and scrolling configuration
    provideAnimations(), // Provide required animations providers
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1036652274526781'),
          },
        ],
        onError: (err: any) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },

    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useFactory: provideSocialAuthServiceConfig,
    // },
    // importProvidersFrom(SocialLoginModule), // Import SocialLoginModule

    // Uncomment the following lines to include Toastr notifications
    // provideToastr(),
    // importProvidersFrom(
    //   ToastrModule.forRoot({
    //     timeOut: 3000,
    //     positionClass: 'toast-top-right',
    //     preventDuplicates: true,
    //   })
    // ),
  ],
}).catch((err) => console.error(err));
