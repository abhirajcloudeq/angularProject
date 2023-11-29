import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {
        path:'signup',component: SignupComponent
        
        
    },
    {
        path:'',component:HomeComponent
    }
];
