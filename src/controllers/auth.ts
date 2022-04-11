import { passwordToHash } from "../helpers/auth";
import { createAuthToken, loginUser, signupUser } from "../services/auth";
// import { IUser } from "../types/user";
import catchAsync from "../utils/catchAsync";
import { loginValidator, signupValidator } from "../validators/auth";

const signupController = catchAsync(async (req, res, next) => {
  signupValidator(req.body, next);
  const newUser = await signupUser({
    ...req.body,
    password: passwordToHash(req.body.password),
  });
  const token = createAuthToken(newUser.id);
  res
    .status(201)
    .json({ status: "success", message: "User signed up successfully", token });
});

const loginController = catchAsync(async (req, res, next) => {
  loginValidator(req.body, next);
  const token = await loginUser(req.body, next);
  res
    .status(200)
    .json({ status: "success", message: "Login successful", token });
});

export { signupController, loginController };
