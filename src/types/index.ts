import { NextFunction, Request, Response } from "express";

type IControllerFn = (req: Request, res: Response, next: NextFunction) => any;
type IControllerFnP = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export type ICatchAsync = (fn: IControllerFnP) => IControllerFn;
