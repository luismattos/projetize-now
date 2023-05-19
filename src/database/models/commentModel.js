import mongoose from "mongoose";
import validator from "validator";

const CommentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          // apenas letras (com ou sem acentos), espaços e apóstrofos
          const nameRegex = new RegExp("^[a-zA-ZÀ-ÿ\\s']+$");
          return (
            nameRegex.test(value) && isLength(value, { min: 1, max: 2000 })
          );
        },
        message: "The text must be between 1 and 2000 characters long.",
      },
      set: (value) => {
        return value.trim();
      },
    },
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
    teamMember: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeamMember",
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
