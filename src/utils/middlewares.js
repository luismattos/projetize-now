import {
  body,
  param,
  query,
  header,
  cookie,
  validationResult,
} from "express-validator";

const middlewares = Middlewares();
export default middlewares;

function Middlewares() {
  const user = [
    //TODO
  ];

  const teamMember = [
    //TODO
  ];

  const task = [
    //TODO
  ];

  const project = [
    //TODO
  ];

  const comment = [
    //TODO
  ];

  const sanitizeAndValidate = async (req, res, next) => {
    Promise.all([
      body("*").trim().escape().run(req),

      param("*").trim().escape().run(req),

      query("*").trim().escape().run(req),

      header("*").trim().escape().run(req),

      cookie("*").trim().escape().run(req),
    ]).then(() => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      return next();
    });
  };

  return {
    user,
    teamMember,
    task,
    project,
    comment,
    sanitizeAndValidate,
  };
}
