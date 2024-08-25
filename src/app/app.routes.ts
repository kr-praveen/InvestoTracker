import { Routes } from '@angular/router';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LoginErrorComponent } from './error/login-error/login-error.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'error/login-error',
        component: LoginErrorComponent
    }
];
