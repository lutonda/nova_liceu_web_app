import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
export const appRoutes: Routes = [
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'signup',
        component: UserComponent,
        children: [
            {
                path: '',
                component: SignUpComponent
            }
        ]
    },
    {
        path: 'login',
        component: UserComponent,
        children: [
            {
                path: 'signin',
                component: SignInComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
