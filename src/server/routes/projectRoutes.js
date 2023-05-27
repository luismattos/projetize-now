import express from "express";

import projectCtrl from "../controllers/projectCtrl.js";

const router = express.Router();

router.get("/", projectCtrl.list);
router.get("/:id", projectCtrl.get);
router.post("/", mids, projectCtrl.create);
router.put("/:id", mids, projectCtrl.update);
router.delete("/:id", projectCtrl.destroy);

export default router;
