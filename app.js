import "dotenv/config";
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

process.env.DIR_NAME === "production"
  ? (app.set("views", path.join(__dirname, "views")),
    app.use(express.static(__dirname + "/public/")))
  : app.use(express.static("public"));

let newTasks = [];
let newdailyTasks=[];

// Middlewares
app.use(express.urlencoded({ extended: true }));

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

app.get("/work", (req, res) => {
  res.render("worklist", { dailylistTasks: newdailyTasks });
});

app.post("/work", (req, res) => {
  let currentdailyTask = req.body.dailynewTask;
  newdailyTasks.push(currentdailyTask);
  res.redirect("/work");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
