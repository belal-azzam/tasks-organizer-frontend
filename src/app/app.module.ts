import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { MasterComponent } from './shared/master/master.component';
import { HomeComponent } from './shared/home/home.component';
import {jwtInterceptorProvider} from "../../projects/auth/src/lib/services/jwt.interceptor";
import {errorInterceptorProvider} from "../../projects/auth/src/lib/services/unauthorized.interceptor";
import {AuthModule} from "../../projects/auth/src/lib/auth.module";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [jwtInterceptorProvider, errorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
