import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
    },
    taskType: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const tasks = mongoose.model("task", taskSchema);

export { tasks };
