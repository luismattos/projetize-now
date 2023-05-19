import mongoose from "mongoose";
import validator from "validator";

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          // apenas letras (com ou sem acentos), espaços e apóstrofos
          const nameRegex = new RegExp("^[a-zA-ZÀ-ÿ\\s']+$");
          return nameRegex.test(value) && isLength(value, { min: 3, max: 50 });
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
          // apenas letras (com ou sem acentos), espaços e apóstrofos
          const nameRegex = new RegExp("^[a-zA-ZÀ-ÿ\\s']+$");
          return (
            nameRegex.test(value) && isLength(value, { min: 3, max: 2000 })
          );
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
