import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userList:any;
  userListStatus = false;
  userName ="";
  constructor(){
    this.userList =[]
  }

  title = 'CMS-Platform fourall';

  /* onUpdateUserName(event:Event){
    this.userName =(<HTMLInputElement>event.target).value;
  } */

  addNewUser(){
    this.userList.push(this.userName);
    this.userListStatus = true;
  }
  getUserNameList(): any[] {
    return this.userList;
  }
  onRemoveUser(id:number){
    const  position = id ;
    if(this.userList.length == 0)
      this.userListStatus = false;

    this.userList.splice(position, 1);
  }



}
