import express from "express";
import { postProperty } from "../controllers/property";
import { protect, restrictTo } from "../middlewares/auth";

const propertyRouter = express.Router();

propertyRouter.post("/", protect, restrictTo("agent", "admin"), postProperty);

export default propertyRouter;
