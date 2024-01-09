import express from "express";
import {
  handleTodayList,
  handleCreateTodayTask,
  handleUpdateTask,
  handleTaskStatus,
  handleDeleteTask,
  handleWorkList,
  handleCreateWorkTask,
} from "../controllers/task.js";
import { restrictToLoggedinUserOnly, checkAuth } from "../middlewares/auth.js";

const router = express.Router();

router
  .route("/today")
  .all(restrictToLoggedinUserOnly)
  .get(handleTodayList)
  .post(handleTaskStatus);
router.post("/today/create", checkAuth, handleCreateTodayTask);

router
  .route("/work")
  .all(restrictToLoggedinUserOnly)
  .get(handleWorkList)
  .post(handleTaskStatus);
router.post("/work/create", checkAuth, handleCreateWorkTask);

router.post("/:list/update/:taskId", handleUpdateTask);
router.post("/:list/delete/:taskId", handleDeleteTask);

export default router;
