import mongoose from "mongoose";
import validator from "validator";

const { isLength } = validator;

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: mongoose.Schema.Types.String,
      required: true,
      validate: {
        validator: (value) => {
          return isLength(value, { min: 3, max: 50 });
        },
        message: "The title must be between 3 and 50 characters long.",
      },
      set: (value) => {
        return value.trim();
      },
    },
    description: {
      type: mongoose.Schema.Types.String,
      validate: {
        validator: (value) => {
          return isLength(value, { min: 3, max: 50 });
        },
        message: "The description must be between 3 and 2000 characters long.",
      },
      set: (value) => {
        return value.trim();
      },
    },
    startDate: {
      type: mongoose.Schema.Types.Date,
    },
    endDate: {
      type: mongoose.Schema.Types.Date,
    },
    priority: {
      type: mongoose.Schema.Types.String,
      enum: ["high", "medium", "low"],
      default: "medium",
      required: true,
    },
    status: {
      type: mongoose.Schema.Types.String,
      enum: ["in progress", "completed", "pending"],
      default: "pending",
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
      set: (value) => {
        return new mongoose.Schema.Types.ObjectId(value);
      },
    },
  },
  { timestamps: true }
);

TaskSchema.query.byProjectId = function (projectId) {
  return this.where("project").equals(new mongoose.Types.ObjectId(projectId));
};

const Task = mongoose.model("Task", TaskSchema);

export default Task;
