import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppCMSMaterialModule } from './app-cms-material.module';

import { AppRoutingModule,routingComponents } from './app-routing.module';

import { HeaderComponent} from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';

import { UserService } from './services/user.service';
import { ContinentService } from './services/continent.service';
import { AddContinentComponent } from './continent/add-continent/add-continent.component';
import { UpdateDeleteContinentComponent } from './continent/update-delete-continent/update-delete-continent.component';
import { ListContinentComponent } from './continent/list-continent/list-continent.component';
import { HomeComponent } from './home/home/home.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { LoginLogoutComponent } from './loginLogout/login-logout/login-logout.component';



@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  UserComponent,
  UserHeaderComponent,
  routingComponents,
  AddContinentComponent, 
  UpdateDeleteContinentComponent, 
  ListContinentComponent, 
  HomeComponent, 
  PageNotFoundComponent, 
  LoginLogoutComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCMSMaterialModule,
    FormsModule,HttpClientModule
  ],
  providers: [
    UserService,ContinentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
