import { Router } from "express";
import { summaryController } from "../controllers/summary.controller.js";
const summaryRouter = Router();

summaryRouter.get("/:videoId", summaryController);

export default summaryRouter;