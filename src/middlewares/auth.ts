import { findUserById, verifyAndDecodeToken } from "../services/auth";
import { IUser } from "../types/user";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

const protect = catchAsync(async (req, res, next) => {
  const decoded = await verifyAndDecodeToken(req, res, next);
  const user = (await findUserById(decoded.id, next)) as IUser;
  req.user = user;
  next();
});

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};
export { protect, restrictTo };
