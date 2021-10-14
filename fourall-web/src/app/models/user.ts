export class User {
  userId: number;
  firstName: string;
  lastName: string;
  userRole: string;
  userName: string;
  userEmail: string;
  userPassword: string;
  locked: boolean;
  enabled: boolean;
  userRoleId: number;

  public constructor(init?:Partial<User>){
    Object.assign(this, init);
  }

}

/**
 *
 */
 export interface IUser {
  userId: number;
  firstName: string;
  lastName: string;
  userRole: string;
  userName: string;
  userEmail: string;
  userPassword: string;
  locked: boolean;
  enabled: boolean;
  userRoleId: number;
}
