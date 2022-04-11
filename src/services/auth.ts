import { NextFunction } from "express";
import { signToken } from "../helpers/auth";
import User from "../models/user";
import AppError from "../utils/appError";

export const signupUser = async (userBody) => {
  return await User.create({ ...userBody, role: "user" });
};

export const createAuthToken = (id: string) => {
  return signToken(id);
};

export const loginUser = async (body, next: NextFunction) => {
  const { email, password } = body;
  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new AppError("Email does not exist", 401));
  if (!(await user.validatePassword(password)))
    return next(new AppError("Incorrect password", 401));
  return createAuthToken(user.id);
};
