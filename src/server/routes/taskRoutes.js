import express from "express";
import { validationResult } from "express-validator";
import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import taskCtrl from "../controllers/taskCtrl.js";
import error from "../../utils/error.js";

const { ValidationError } = error;

const router = express.Router();

const mids = [...inVals.task, ...middlewares.task];

router.get("/", taskCtrl.list);
router.get("/:id", taskCtrl.get);
router.post("/", mids, taskCtrl.create);
router.put("/:id", mids, taskCtrl.update);
router.delete("/:id", taskCtrl.destroy);

export default router;
