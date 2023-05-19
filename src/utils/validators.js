import { body } from "express-validator";
import crypt from "../../utils/crypt.js";

const validators = Validators();
export default validators;

function Validators() {
  const user = [
    body("name")
      .trim()
      .isLength({ min: 3, max: 50 })
      .withMessage("The name must have at least 3 characters")
      .matches(/^[a-zA-ZÀ-ÿ\s']+$/)
      .withMessage(
        "The name must contain only letters, spaces, and apostrophes"
      ),

    body("email")
      .trim()
      .isEmail()
      .withMessage("Invalid email address")
      .normalizeEmail(),

    body("password")
      .trim()
      .isStrongPassword({
        minLength: 8,
        maxLength: 16,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage(
        "The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character. It must be between 8 and 16 characters long."
      ),
  ];

  const teamMember = [
    //TODO
  ];

  const task = [
    //TODO
  ];

  const project = [
    //TODO
  ];

  const comment = [
    //TODO
  ];

  return { user, teamMember, task, project, comment };
}
