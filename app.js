import "dotenv/config";
import express from "express";
import path from "path";
import userRouter from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");

process.env.DIR_NAME === "production"
  ? (app.set("views", path.join(__dirname, "views")),
    app.use(express.static(__dirname + "/public/")))
  : app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
