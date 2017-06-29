import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { LandingEnComponent } from './landing-en/landing-en.component';
import { LandingTrComponent } from './landing-tr/landing-tr.component';
import { LandingBrComponent } from './landing-br/landing-br.component';
import { LandingIdComponent } from './landing-id/landing-id.component';
import { AuthGuard } from './auth.guard';


const appRoutes: Routes = [
    { path: 'en', component: LandingEnComponent },
    { path: 'tr', component: LandingTrComponent },
    { path: 'br', component: LandingBrComponent },
    { path: 'id', component: LandingIdComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'share', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'landing' }
];

export const routing = RouterModule.forRoot(appRoutes);
