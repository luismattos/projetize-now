import mongoose from "mongoose";
import validator from "validator";

const { isLength } = validator;

const TeamMemberSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isOwner: {
      type: mongoose.Schema.Types.Boolean,
      required: true,
    },
    role: {
      type: String,
      validate: {
        validator: (value) => {
          return isLength(value, { min: 1, max: 50 });
        },
        message: "The role must be between 1 and 50 characters long.",
      },
      set: (value) => {
        return value.trim();
      },
    },
  },
  { timestamps: true }
);

const TeamMember = mongoose.model("TeamMember", TeamMemberSchema);
export default TeamMember;
