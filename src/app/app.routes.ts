import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { AuthComponent } from './auth';
import { DataResolver } from './app.resolver';

import { AuthService } from './services';
export const ROUTES: Routes = [
  { path: '',
     canActivate: [AuthService],
  children: [{path: '', component: HomeComponent},
 { path: 'about',  component: AboutComponent }
]},
  { path: 'auth', component: AuthComponent },
  { path: '**',    component: NoContentComponent },
];
