import express from "express";
import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import teamMemberCtrl from "../controllers/teamMemberCtrl.js";

const router = express.Router();

const mids = [
  ...inVals.teamMember,
  ...middlewares.teamMember,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

router.get("/", teamMemberCtrl.list);
router.get("/:id", teamMemberCtrl.get);
router.post("/", mids, teamMemberCtrl.create);
router.put("/:id", mids, teamMemberCtrl.update);
router.delete("/:id", teamMemberCtrl.destroy);

export default router;
