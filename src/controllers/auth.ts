import { passwordToHash } from "../helpers/auth";
import { createAuthToken, signupUser } from "../services/auth";
import catchAsync from "../utils/catchAsync";
import { signupValidator } from "../validators/auth";

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

export { signupController };
