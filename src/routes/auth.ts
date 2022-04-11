import express from "express";
import { loginController, signupController } from "../controllers/auth";
import { protect } from "../middlewares/auth";
const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/signup", signupController);
authRouter.post("/test", protect);

export default authRouter;
