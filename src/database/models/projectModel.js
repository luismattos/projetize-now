import mongoose from "mongoose";
import validator from "validator";

const { isLength } = validator;

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return isLength(value, { min: 3, max: 50 });
        },
        message: "The name must be between 3 and 50 characters long.",
      },
      set: (value) => {
        return value.trim();
      },
    },
    description: {
      type: String,
      validate: {
        validator: (value) => {
          return isLength(value, { min: 3, max: 2000 });
        },
        message: "The description must be between 3 and 2000 characters long.",
      },
      set: (value) => {
        return value.trim();
      },
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
