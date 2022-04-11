import { NextFunction, Request, Response } from "express";
import { promisify } from "util";
import { signToken } from "../helpers/auth";
import User from "../models/user";
import AppError from "../utils/appError";
import jwt from "jsonwebtoken";

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

export const verifyAndDecodeToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  // console.log(token);
  if (!token) {
    return next(
      new AppError("Your are not logged in, please log in to get access", 401)
    );
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  return decoded;
};

export const findUserById = async (id: string, next: NextFunction) => {
  const user = await User.findById(id);
  if (!user) {
    return next(
      new AppError("the user belonging to the token no longer exist", 400)
    );
  }
  // if (user.changedPasswordAfter(decoded.iat)) {
  //   return next(
  //     new AppError("User recently changed password! Please login again", 401)
  //   );
  // }

  // GRANT ACCESS TO PROTECTED ROUTE
  return user;
};
