import mongoose from "mongoose";
import validator from "validator";

const { isLength } = validator;

const TaskSchema = new Schema(
  {
    title: {
      type: String,
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
      type: String,
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
      type: Date,
    },
    endDate: {
      type: Date,
    },
    priority: {
      type: String,
      enum: ["high", "medium", "low"],
      default: "medium",
      required: true,
    },
    status: {
      type: String,
      enum: ["in progress", "completed", "pending"],
      default: "pending",
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    teamMember: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TeamMember",
      },
    ],
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
