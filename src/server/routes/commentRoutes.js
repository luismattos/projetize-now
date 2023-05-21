import express from "express";
import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import commentCtrl from "../controllers/commentCtrl.js";

const router = express.Router();

const mids = [
  ...inVals.comment,
  ...middlewares.comment,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

router.get("/", commentCtrl.list);
router.get("/:id", commentCtrl.get);
router.post("/", mids, commentCtrl.create);
router.put("/:id", mids, commentCtrl.update);
router.delete("/:id", commentCtrl.destroy);

export default router;
