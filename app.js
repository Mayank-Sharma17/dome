import "dotenv/config";
import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
if (process.env.DIR_NAME === "production") {
  app.set("views", path.join(__dirname, "views"));
}
let newTasks = [];

// Middlewares
if (process.env.DIR_NAME === "production") {
  app.use(express.static(__dirname + "/public/"));
} else {
  app.use(express.static("public"));
}
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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
