import express from "express";
import teamMemberCtrl from "../controllers/teamMemberCtrl.js";

const router = express.Router();

router.get("/", teamMemberCtrl.list);
router.get("/:id", teamMemberCtrl.get);
router.post("/", teamMemberCtrl.create);
router.put("/:id", teamMemberCtrl.update);
router.delete("/:id", teamMemberCtrl.destroy);

export default router;
