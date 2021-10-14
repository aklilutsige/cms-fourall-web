import { UserService } from 'src/app/services/user.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  /**
   * Add user form databinding
   */
  inputFirstName: string = '';
  inputLastName: string = '';
  inputUserRole: String = '';
  inputUserName:string='';
  inputUserEmail:string='';
  inputUserpassword:string='';
  re_inputUserpassword:string='';
  inputLocked:boolean=true;
  inputEnabled:boolean=true;
  inputUserRoleId:number=2;
  newUser:User;
  /**
   * Form propperte setting...
   */
  formAddNewUser: boolean = true;
  buttonAddUser:boolean=true;
  errorInputForm: boolean = false;



  addedUsersList: User[] =[];
  /**
   *  User constructor new (Parm...)
   */


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log(this.inputUserRoleId)
  }

  addNewUser() {
    if(this.formAddNewUser){
    if(this.inputFirstName == "" &&
       this.inputLastName == "" &&
       this.inputUserEmail=="" &&
       this.inputUserpassword == ""){
         this.errorInputForm = true;

       }
       else{
         this.newUser = new User(<User>
            {
              userId: 0,
              firstName: this.inputFirstName,
              lastName: this.inputLastName,
              userRole: this.inputUserRole,
              userName: this.inputUserName,
              userEmail: this.inputUserEmail,
              userPassword: this.inputUserpassword,
              locked: this.inputLocked,
              enabled: this.inputEnabled,
              userRoleId: this.inputUserRoleId,
          }
      );
    /**
     * Add new user (User object)
     */
    this.userService.addNewUser(this.newUser);
    this.formAddNewUser = ! this.formAddNewUser;
    this.addedUsersList.push(this.newUser);
    }
  }
  else{
    this.formAddNewUser = ! this.formAddNewUser;
  }
  }
}
