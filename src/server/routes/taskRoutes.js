import express from "express";
import taskCtrl from "../controllers/taskCtrl.js";

const router = express.Router();

router.get("/", taskCtrl.list);
router.get("/:id", taskCtrl.get);
router.post("/", taskCtrl.create);
router.put("/:id", taskCtrl.update);
router.delete("/:id", taskCtrl.destroy);

export default router;
