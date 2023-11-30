import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [

 {
    path : 'sign-up', component:SignUpComponent

 },
 {
    path : '',component:SignInComponent
 }
];
