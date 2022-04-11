import { NextFunction } from "express";
import Joi from "joi";
import AppError from "../utils/appError";

export const postPropertyValidator = (body, next: NextFunction) => {
  const schema = Joi.object().keys({
    location: Joi.string().required(),
    cost: Joi.number().required(),
    rooms: Joi.number().required(),
  });
  const isValidateResult: Joi.ValidationResult = schema.validate(body);
  if (isValidateResult?.error) {
    next(new AppError(isValidateResult.error?.message, 400));
  }
};
