let newTasks = [];
let newdailyTasks = [];

export function handleDayDate(req, res) {
  let options = { weekday: "long", day: "numeric", month: "long" };
  let today = new Date().toLocaleDateString("default", options);
  res.render("index", { CurrentDay: today, listTasks: newTasks });
}

export function handleCreateTodayTask(req, res) {
  let currentTask = req.body.newTask;
  newTasks.push(currentTask);
  res.redirect("/");
}

export function handleWorkList(req, res) {
  res.render("worklist", { dailylistTasks: newdailyTasks });
}

export function handleCreateWorkTask(req, res) {
  let currentdailyTask = req.body.dailynewTask;
  newdailyTasks.push(currentdailyTask);
  res.redirect("/work");
}
