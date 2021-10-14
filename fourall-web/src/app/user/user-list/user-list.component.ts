import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[];
  userById: User;
  userIdTest: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.setUsersList();
    this.setUserById(this.userIdTest);
  }
  setUsersList() {
    this.userService.getUserList().subscribe((data) => {
      this.users = data;
    });
  }
  getUsersListOrderByFirstName(){

    return  this.users.sort((u1, u2) => 0 - (u1.firstName  < u2.firstName ? 1 : -1));
  }
  setUserById(userId:number){
    this.userService.getUserById(userId).subscribe((data)=>{this.userById = data})
  }
}
