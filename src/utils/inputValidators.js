import { body, validationResult } from "express-validator";

const inputValidators = InputValidators();
export default inputValidators;

function InputValidators() {
  const user = [
    body("name")
      .exists()
      .withMessage("Name is required.")
      .not()
      .isEmpty()
      .withMessage("Name cannot be empty.")
      .trim()
      .isLength({ min: 3, max: 50 })
      .withMessage("The name must be between 3 and 50 characters long")
      .matches(/^[a-zA-ZÀ-ÿ\s']+$/)
      .withMessage(
        "The name must contain only letters, spaces, and apostrophes"
      ),

    body("email")
      .exists()
      .withMessage("Email is required.")
      .not()
      .isEmpty()
      .withMessage("Email cannot be empty")
      .trim()
      .isEmail()
      .withMessage("Invalid email address")
      .normalizeEmail(),

    body("password")
      .exists()
      .withMessage("Password is required.")
      .not()
      .isEmpty()
      .withMessage("Password cannot be empty.")
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
    body("userId")
      .exists()
      .withMessage("User Id is required.")
      .not()
      .isEmpty()
      .withMessage("User Id cannot be empty.")
      .trim()
      .isMongoId(),
    body("projectId")
      .exists()
      .withMessage("Project Id is required.")
      .not()
      .isEmpty()
      .withMessage("Project Id cannot be empty.")
      .trim()
      .isMongoId(),
    body("isOwner")
      .exists()
      .withMessage("Is Owner is required")
      .not()
      .isEmpty()
      .withMessage("Is Owner cannot be empty")
      .trim()
      .isBoolean()
      .withMessage("Is Owner must be boolean."),
    body("role")
      .optional()
      .not()
      .isEmpty()
      .withMessage("Role cannot be empty")
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage("Role must be between 1 and 50 characters long."),
  ];

  const project = [
    body("name")
      .exists()
      .not()
      .isEmpty()
      .trim()
      .isLength({ min: 3, max: 50 })
      .withMessage("The name must be between 3 and 50 characters long."),

    body("description")
      .optional()
      .not()
      .isEmpty()
      .trim()
      .isLength({ min: 3, max: 2000 })
      .withMessage(
        "The description must be between 3 and 2000 characters long."
      ),

    body("startDate")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("Start date must be a valid date (ISO 8601 format)."),

    body("endDate")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("End date must be a valid date (ISO 8601 format)."),
  ];

  const task = [
    body("title").exists().not().isEmpty().isLength({ min: 3, max: 50 }),

    body("description").optional().isLength({ min: 3, max: 2000 }),

    body("startDate")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("Start date must be a valid date (ISO 8601 format)."),

    body("endDate")
      .optional()
      .isISO8601()
      .toDate()
      .withMessage("End date must be a valid date (ISO 8601 format)."),

    body("priority").isIn(["high", "medium", "low"]),

    body("status").isIn(["in progress", "completed", "pending"]),

    body("project").exists().not().isEmpty().isMongoId().notEmpty(),

    // body("teamMember").optional().isArray(),

    body("teamMember.*").optional().not().isEmpty().isMongoId(),
  ];

  const comment = [
    body("text")
      .exists()
      .withMessage("Text is required")
      .not()
      .isEmpty()
      .withMessage("Text cannot be empty")
      .isLength({ min: 1, max: 2000 })
      .withMessage("Text must be between 1 and 2000 characters long"),

    body("task").notEmpty().withMessage("Task ID is required"),

    body("teamMember").notEmpty().withMessage("Team Member ID is required"),
  ];

  return { user, teamMember, task, project, comment };
}
