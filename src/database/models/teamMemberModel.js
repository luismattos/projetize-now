import mongoose from "mongoose";
import validator from "validator";

const { isLength } = validator;

const TeamMemberSchema = new mongoose.Schema(
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
      type: mongoose.Schema.Types.String,
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

TeamMemberSchema.query.byUserId = function (userId) {
  return this.where("user").equals(new mongoose.Types.ObjectId(userId));
};

TeamMemberSchema.query.byProjectId = function (projectId) {
  return this.where("project").equals(new mongoose.Types.ObjectId(projectId));
};

const TeamMember = mongoose.model("TeamMember", TeamMemberSchema);
export default TeamMember;
