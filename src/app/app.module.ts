import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login-module/login.component';
import { ListComponent } from './user-list-page/user-list-page-component';

import {ServerApi} from '../common-service/api-call-service';
import {ApiCallClass} from '../common-service/api-call-model';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpModule
  ],
  providers: [ServerApi,ApiCallClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
