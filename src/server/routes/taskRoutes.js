import express from "express";
import validators from "../../utils/validators.js";
import taskCtrl from "../controllers/taskCtrl.js";

const router = express.Router();

router.get("/tasks", validators.task, taskCtrllist);
router.get("/tasks/:id", taskCtrl.get);
router.post("/tasks", taskCtrl.create);
router.put("/tasks/:id", taskCtrl.update);
router.delete("/tasks/:id", taskCtrl.destroy);

export default router;
