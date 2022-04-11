import express from "express";
import { loginController, signupController } from "../controllers/auth";
const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/signup", signupController);

export default authRouter;
