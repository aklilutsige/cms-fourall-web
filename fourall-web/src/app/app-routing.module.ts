import { AddContinentComponent } from './continent/add-continent/add-continent.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { HomeComponent } from './home/home/home.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { LoginLogoutComponent } from './loginLogout/login-logout/login-logout.component';


const routes: Routes = [ 
  {path:'continent/continent', component:AddContinentComponent},
  {path:'user/list',component:UserListComponent},
  {path:'user/add', component: UserAddComponent},
  {path:'user/edit', component: UserEditComponent},
  {path:'user', component: UserComponent},
  {path:'login',component:LoginLogoutComponent},
  {path:'home',component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AddContinentComponent,
  UserAddComponent,
  UserListComponent,
  UserEditComponent,
  UserComponent,
  LoginLogoutComponent,
  HomeComponent,
  PageNotFoundComponent
];
