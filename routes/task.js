import express from "express";
import {
  handleTodayList,
  handleCreateTodayTask,
  handleUpdateTask,
  handleDeleteTask,
  handleWorkList,
  handleCreateWorkTask,
} from "../controllers/task.js";
import { restrictToLoggedinUserOnly, checkAuth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/today", restrictToLoggedinUserOnly, handleTodayList);
router.post("/today/create", checkAuth, handleCreateTodayTask);

router.get("/work", restrictToLoggedinUserOnly, handleWorkList);
router.post("/work/create", checkAuth, handleCreateWorkTask);

router.post("/:list/update/:taskId", handleUpdateTask);
router.post("/:list/delete/:taskId", handleDeleteTask);

export default router;
