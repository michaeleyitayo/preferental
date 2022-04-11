import express from "express";
import { getUsers } from "../controllers/user";
import { protect, restrictTo } from "../middlewares/auth";

const userRouter = express.Router();

userRouter.get("/", protect, restrictTo("admin"), getUsers);

export default userRouter;
