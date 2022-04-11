import { ObjectId } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  validatePassword(passsword: string): boolean;
}

export interface IReqUser extends IUser {
  _id?: ObjectId;
}
