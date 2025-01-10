import { Routes } from '@angular/router';
import { AuthGuard } from './Auth/AuthGaurd';
import { AuthRedirectGuard } from './Auth/AuthRedirectGuard';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./pages/Layout/layout-module').then((m) => m.LayoutModule),
        // canActivate: [AuthGuard],
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/Auth/auth.module').then((m) => m.LoginSignupModule),
        // canActivate: [AuthRedirectGuard],
    },

]
