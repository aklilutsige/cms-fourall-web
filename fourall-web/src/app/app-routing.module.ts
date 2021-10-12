import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

const routes: Routes = [
  {path:'user/list',component:UserListComponent},
  {path:'user/add', component: UserAddComponent},
  {path:'user/edit', component: UserEditComponent},
  {path: "**", component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  UserAddComponent,
  UserListComponent,
  UserEditComponent,
];
