import express from "express";
import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import userCtrl from "../controllers/userCtrl.js";

const router = express.Router();

const mids = [
  ...inVals.user,
  ...middlewares.user,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

router.get("/", userCtrl.list);
router.get("/:id", userCtrl.get);
router.post("/", mids, userCtrl.create);
router.put("/:id", mids, userCtrl.update);
router.delete("/:id", userCtrl.destroy);

export default router;
