import express from "express";
import { validationResult } from "express-validator";
import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import teamMemberCtrl from "../controllers/teamMemberCtrl.js";
import error from "../../utils/error.js";

const { ValidationError } = error;

const router = express.Router();

const mids = [...inVals.teamMember, ...middlewares.teamMember];

router.get("/", teamMemberCtrl.list);
router.get("/:id", teamMemberCtrl.get);
router.post("/", mids, teamMemberCtrl.create);
router.put("/:id", mids, teamMemberCtrl.update);
router.delete("/:id", teamMemberCtrl.destroy);

export default router;
