import mongoose from "mongoose";
import validator from "validator";
import crypt from "../../utils/crypt.js";

const { isEmail, isStrongPassword, isLength } = validator;

const UserSchema = new mongoose.Schema(
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
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) => {
          return isEmail(value);
        },
        message: "Invalid email address",
      },
      set: (value) => {
        return value.trim().toLowerCase();
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return isStrongPassword(value, {
            minLength: 8,
            maxLength: 16,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
          });
        },
        message:
          "The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It must be between 8 and 16 characters long.",
      },
      set: (value) => {
        const encValue = crypt.encryptPassword(value.trim());
        return encValue;
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
