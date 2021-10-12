import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
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
  setUserById(userId:number){
    this.userService.getUserById(userId).subscribe((data)=>{this.userById = data})
  }
}
