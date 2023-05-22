import express from "express";
import { validationResult } from "express-validator";
import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import projectCtrl from "../controllers/projectCtrl.js";
import error from "../../utils/error.js";

const { ValidationError } = error;

const router = express.Router();

const mids = [...inVals.project, ...middlewares.project];

router.get("/", projectCtrl.list);
router.get("/:id", projectCtrl.get);
router.post("/", mids, projectCtrl.create);
router.put("/:id", mids, projectCtrl.update);
router.delete("/:id", projectCtrl.destroy);

export default router;
