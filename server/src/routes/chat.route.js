import { Router } from "express";
import { chatController } from "../controllers/chat.controller.js";
const chatRoute = Router();

chatRoute.post("/", chatController);

export default chatRoute;
