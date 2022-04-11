import { ObjectId } from "mongoose";
export interface IProperty {
  cost: number;
  rooms: number;
  location: string;
  ownerId: ObjectId;
}
