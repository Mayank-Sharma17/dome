import "dotenv/config";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import { connectToMongoDB } from "./db/connectDB.js";

const app = express();
const port = process.env.PORT;

// Routes
import taskRouter from "./routes/task.js";
import staticRouter from "./routes/static.js";
import userRouter from "./routes/user.js";

connectToMongoDB(process.env.MONGODB_URL).then(() => {
  console.log("MongoDB connected...");
});

const publicPath = path.resolve("./client/public");
const viewsPath = path.resolve("./client/views");

app.set("view engine", "ejs");
app.set("views", viewsPath);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));
app.use(cookieParser());

app.use(staticRouter);
app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
