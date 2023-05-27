import express from "express";
import userCtrl from "../controllers/userCtrl.js";

const router = express.Router();

router.get("/", userCtrl.list);
router.get("/:id", userCtrl.get);
router.post("/", userCtrl.create);
router.put("/:id", userCtrl.update);
router.delete("/:id", userCtrl.destroy);

export default router;
