//import { IUser } from './../../common/user';
import { UserService } from 'src/app/services/user.service';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IUser, User } from 'src/app/common/user';
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  users: IUser[] = [];
  editeDeleteUser: IUser;
  updateUser: User;
  successUpdate: boolean = false;
  dangerDelete: boolean = false;

  firstName: string;
  lastName: string;
  userName: string;
  role: String;
  email: String;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.setUsersList();
  }
  setUsersList() {
    this.userService.getUserList().subscribe((data) => {
      this.users = data;
    });
  }
  getUserListOrderByName(){

    return  this.users.sort((u1, u2) => 0 - (u1.firstName  < u2.firstName ? 1 : -1));
  }
  userOnSelect(user: IUser) {
    this.successUpdate = false;
    this.dangerDelete = false;
    this.editeDeleteUser = user;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.userName = user.userName;
    this.role = user.userRole;
    this.email = user.userEmail;
  }
  onUpdateUser() {
    this.updateUser = new User(<User>{
      userId: this.editeDeleteUser.userId,
      firstName: this.firstName,
      lastName: this.lastName,
      userRole: this.role,
      userName: this.userName,
      userEmail: this.email,
      userPassword: this.editeDeleteUser.userPassword,
      locked: this.editeDeleteUser.locked,
      enabled: this.editeDeleteUser.enabled,
      userRoleId: this.editeDeleteUser.userRoleId,
    });
    this.userService.updateExistedUser(this.updateUser);
    this.successUpdate = true;
  }
  onDeleteUser() {
    this.userService.deleteExistedUser(this.editeDeleteUser.userId);
    this.dangerDelete = true;
  }
}
