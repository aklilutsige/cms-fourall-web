import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCMSMaterialModule } from './app-cms-material.module';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HeaderComponent} from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { ContinentService } from './services/continent.service';


@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  UserComponent,
  UserHeaderComponent
  ,routingComponents
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
