import express from "express";
import { getUsers, upgradeToAgent } from "../controllers/user";
import { protect, restrictTo } from "../middlewares/auth";

const userRouter = express.Router();

userRouter
  .get("/", protect, restrictTo("admin"), getUsers)
  .patch("/to-agent/:userId", protect, restrictTo("admin"), upgradeToAgent);

export default userRouter;
