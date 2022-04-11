import { NextFunction, Request, Response } from "express";
import { IReqUser, IUser } from "./user";

interface CustomRequest extends Request {
  user?: IUser;
}

type IControllerFn = (req: Request, res: Response, next: NextFunction) => any;

type IControllerFnP = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => Promise<any>;

export type ICatchAsync = (fn: IControllerFnP) => IControllerFn;
