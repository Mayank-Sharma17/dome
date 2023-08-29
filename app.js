import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

let newTasks = [];

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  let options = { weekday: "long", day: "numeric", month: "long" };
  let today = new Date().toLocaleDateString("default", options);
  res.render("index", { CurrentDay: today, listTasks: newTasks });
});

app.post("/", (req, res) => {
  let currentTask = req.body.newTask;
  newTasks.push(currentTask);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
