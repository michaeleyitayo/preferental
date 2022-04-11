import { ICatchAsync } from "../types";

const catchAsync: ICatchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};

export default catchAsync;
