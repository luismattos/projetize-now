import express from "express";
import validators from "../../utils/validators.js";
import commentCtrl from "../controllers/commentCtrl.js";

const router = express.Router();

router.get("/comments", validators.comment, commentCtrl.list);
router.get("/comments/:id", commentCtrl.get);
router.post("/comments", commentCtrl.create);
router.put("/comments/:id", commentCtrl.update);
router.delete("/comments/:id", commentCtrl.destroy);

export default router;
