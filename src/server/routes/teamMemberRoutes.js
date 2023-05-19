import express from "express";
import validators from "../../utils/validators.js";
import teamMemberCtrl from "../controllers/teamMemberCtrl.js";

const router = express.Router();

router.get("/teamMembers", validators.teamMember, teamMemberCtrl.list);
router.get("/teamMembers/:id", teamMemberCtrl.get);
router.post("/teamMembers", teamMemberCtrl.create);
router.put("/teamMembers/:id", teamMemberCtrl.update);
router.delete("/teamMembers/:id", teamMemberCtrl.destroy);

export default router;
