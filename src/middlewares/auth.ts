import { findUserById, verifyAndDecodeToken } from "../services/auth";
import { IUser } from "../types/user";
import catchAsync from "../utils/catchAsync";

const protect = catchAsync(async (req, res, next) => {
  const decoded = await verifyAndDecodeToken(req, res, next);
  const user = (await findUserById(decoded.id, next)) as IUser;
  req.user = user;
  next();
});

export { protect };
