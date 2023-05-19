import express from "express";
import expressValidator from "express-validator";
import validators from "../../utils/validators.js";
import userCtrl from "../controllers/userCtrl.js";

const router = express.Router();

router.get("/users", validators.user, userCtrl.list);
router.get("/users/:id", userCtrl.get);
router.post("/users", userCtrl.create);
router.put("/users/:id", userCtrl.update);
router.delete("/users/:id", userCtrl.destroy);

export default router;
