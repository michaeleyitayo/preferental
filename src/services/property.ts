import Property from "../models/property";
import { ObjectId } from "mongoose";

export const createProperty = async (userId: ObjectId, propertyBody) => {
  return await Property.create({ ...propertyBody, ownerId: userId });
};

export const getAllProperties = async () => {
  return await Property.find({});
};
