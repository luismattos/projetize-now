import express from "express";
import validators from "../../utils/validators.js";
import projectCtrl from "../controllers/projectCtrl.js";

const router = express.Router();

router.get("/projects", validators.project, projectCtrl.list);
router.get("/projects/:id", projectCtrl.get);
router.post("/projects", projectCtrl.create);
router.put("/projects/:id", projectCtrl.update);
router.delete("/projects/:id", projectCtrl.destroy);

export default router;
