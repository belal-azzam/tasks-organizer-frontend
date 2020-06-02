import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {AuthService} from "./services/auth.service";
import { RegisterComponent } from './components/register/register.component';
import {AppRoutingModule} from "../../../../src/app/app-routing.module";



@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [AuthService],
  exports: [AuthComponent, LoginComponent]
})
export class AuthModule { }
