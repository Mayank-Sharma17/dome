import express from "express";
import {
  handleDayDate,
  handleCreateTodayTask,
  handleWorkList,
  handleCreateWorkTask,
} from "../controllers/index.js";

const router = express.Router();

router.route("/").get(handleDayDate).post(handleCreateTodayTask);

router.route("/work").get(handleWorkList).post(handleCreateWorkTask);

export default router;
