import { tasks } from "../models/task.js";

export async function handleTodayList(req, res) {
  try {
    const todayTasksObj = await tasks.find({ taskType: "today", createdBy: req.user._id }).lean().exec();
    let options = { weekday: "long", day: "numeric", month: "long" };
    let today = new Date().toLocaleDateString("default", options);

    res.render("todaylist", {
      CurrentDay: today,
      listTasks: todayTasksObj,
    });
  } catch (error) {
    console.error("Error in fetching today tasks:", error);
    res.status(500).send("Internal Server Error");
  }
}

export async function handleCreateTodayTask(req, res) {
  try {
    let currentTask = req.body.newTask;
    const newTask = new tasks({ task: currentTask, taskType: "today", createdBy: req.user._id });

    await newTask.save();

    res.redirect("/today");
  } catch (error) {
    console.error("Error in creating today task:", error);
    res.status(500).send("Internal Server Error");
  }
}

export async function handleWorkList(req, res) {
  try {
    const workTasksObj = await tasks.find({ taskType: "work", createdBy: req.user._id }).lean().exec();
    res.render("worklist", { dailylistTasks: workTasksObj });
  } catch (error) {
    console.log("Error in fetching work tasks:", error);
    res.status(500).send("Internal Server Error");
  }
}

export async function handleCreateWorkTask(req, res) {
  try {
    let currentWorkTask = req.body.dailynewTask;
    const newWorkTask = new tasks({ task: currentWorkTask, taskType: "work", createdBy: req.user._id });

    await newWorkTask.save();

    res.redirect("/work");
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).send("Internal Server Error");
  }
}

export async function handleUpdateTask(req, res) {
  try {
    const updatedTask = req.body.updateTask;
    const newStatus = Boolean(req.body.status);
    const currTaskId = req.params.taskId;

    await tasks.findOneAndUpdate({ _id: currTaskId }, { $set: { task: updatedTask, status: newStatus } });

    if (req.params.list === "today") {
      res.redirect("/today");
    } else {
      res.redirect("/work");
    }
  } catch (error) {
    console.log("Error in updating today task:", error);
    res.status(500).send("Internal Server Error");
  }
}

export async function handleDeleteTask(req, res) {
  try {
    const currTaskId = req.params.taskId;

    await tasks.findOneAndDelete({ _id: currTaskId });

    if (req.params.list === "today") {
      res.redirect("/today");
    } else {
      res.redirect("/work");
    }
  } catch (error) {
    console.log("Error in deleting today task:", error);
    res.status(500).send("Internal Server Error");
  }
}
