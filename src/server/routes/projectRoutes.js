import express from "express";
import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import projectCtrl from "../controllers/projectCtrl.js";

const router = express.Router();

const mids = [
  ...inVals.project,
  ...middlewares.project,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

router.get("/", projectCtrl.list);
router.get("/:id", projectCtrl.get);
router.post("/", mids, projectCtrl.create);
router.put("/:id", mids, projectCtrl.update);
router.delete("/:id", projectCtrl.destroy);

export default router;
