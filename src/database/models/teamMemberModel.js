import mongoose from "mongoose";
import validator from "validator";

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
      required: true,
      validate: {
        validator: (value) => {
          // apenas letras (com ou sem acentos), espaços e apóstrofos
          const nameRegex = new RegExp("^[a-zA-ZÀ-ÿ\\s']+$");
          return nameRegex.test(value) && isLength(value, { min: 3, max: 50 });
        },
        message: "The role must be between 3 and 50 characters long.",
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
