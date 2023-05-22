import express from "express";
import { validationResult } from "express-validator";
import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import userCtrl from "../controllers/userCtrl.js";
import error from "../../utils/error.js";

const { ValidationError } = error;

const router = express.Router();

const mids = [...inVals.user, ...middlewares.user];

router.get("/", userCtrl.list);
router.get("/:id", userCtrl.get);
router.post("/", mids, userCtrl.create);
router.put("/:id", mids, userCtrl.update);
router.delete("/:id", userCtrl.destroy);

export default router;
