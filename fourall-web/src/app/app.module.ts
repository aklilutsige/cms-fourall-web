import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCMSMaterialModule } from './app-cms-material.module';

import {HeaderComponent} from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { UserAddComponent } from './user/user-add/user-add.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserListComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppCMSMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
