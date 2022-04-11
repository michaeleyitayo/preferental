export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  validatePassword(passsword: string): boolean;
}

export interface IReqUser {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
