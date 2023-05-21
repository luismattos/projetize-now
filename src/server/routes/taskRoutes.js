import express from "express";
import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import taskCtrl from "../controllers/taskCtrl.js";

const router = express.Router();

const mids = [
  ...inVals.task,
  ...middlewares.task,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

router.get("/", taskCtrl.list);
router.get("/:id", taskCtrl.get);
router.post("/", mids, taskCtrl.create);
router.put("/:id", mids, taskCtrl.update);
router.delete("/:id", taskCtrl.destroy);

export default router;
