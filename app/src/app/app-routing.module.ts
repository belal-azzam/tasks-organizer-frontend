import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MasterComponent} from "./shared/master/master.component";
import {HomeComponent} from "./shared/home/home.component";
import {LoginComponent} from "../../projects/auth/src/lib/components/login/login.component";
import {AuthGuard} from "../../projects/auth/src/lib/auth.guard";
import {RegisterComponent} from "../../projects/auth/src/lib/components/register/register.component";


const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
