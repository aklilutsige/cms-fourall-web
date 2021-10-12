import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, IUser } from '../common/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //private baseUrlJson :String ='/assets/data/users.json'
  private baseUrl = 'http://localhost:8080/cms-et/users';

  constructor(private httpClient: HttpClient) {}

  getUserList(): Observable<User[]> {
    return this.httpClient
      .get<IUser[]>(this.baseUrl)
      .pipe(map((response) => response));
  }
  getUserById(userId: number): Observable<User> {
    return this.httpClient
      .get<IUser>(this.baseUrl + '/' + userId)
      .pipe(map((response) => response));
  }
  addNewUser(newUser: User) {
    this.httpClient.post(this.baseUrl, newUser).subscribe((response) => {
      console.log(response);
    });
  }
  updateExistedUser(updateUser: User) {
    this.httpClient
      .put(this.baseUrl + '/' + updateUser.userId, updateUser)
      .subscribe((response) => {
        console.log(response);
      });
  }
  deleteExistedUser(userId:number){
    this.httpClient
      .delete(this.baseUrl + '/' + userId)
      .subscribe((response) => {
        console.log(response);
      });

  }
  /**
   *
   * @returns Users[] List ONLY FOR TEST
   */
  /* getUserListJSON() {
    return [
      {
        userId: 1, firstName: 'aklilu', lastName: 'Tsige',userRole: 'ADMIN',userName: 'aki',
        userEmail: 'aklilu.tsige@gmail.com',userPassword: 'admin',locked: false,enabled: true,userRoleId: 1,
      },
      {
        userId: 2,firstName: 'Tegest',lastName: 'Genene',userRole: 'USER',userName: 'Tg',
        userEmail: 'tegest.genene@gmail.com',userPassword: 'user',locked: false,enabled: true,userRoleId: 2,
      },
    ];
  }*/
}
