import { signToken } from "../helpers/auth";
import User from "../models/user";

export const signupUser = async (userBody) => {
  return await User.create({ ...userBody, role: "user" });
};

export const createAuthToken = (id: string) => {
  return signToken(id);
};
