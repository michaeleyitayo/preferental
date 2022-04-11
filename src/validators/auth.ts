import { NextFunction } from "express";
import AppError from "../utils/appError";
import Joi from "joi";

export const loginValidator = (
  body: { email: string; password: string },
  next: NextFunction
) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  const isValidateResult: Joi.ValidationResult = schema.validate(body);
  if (isValidateResult?.error) {
    next(new AppError(isValidateResult.error?.message, 400));
  }
};

export const signupValidator = (body, next: NextFunction) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  });
  const isValidateResult: Joi.ValidationResult = schema.validate(body);
  if (isValidateResult?.error) {
    next(new AppError(isValidateResult.error?.message, 400));
  }
};
