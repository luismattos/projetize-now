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
  function ifValidatedGoToService(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      next(errors);
    } else {
      next();
    }
  }

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

  const error = (() => {
    function logErrors(err, req, res, next) {
      console.error(err);
      next(err);
    }

    function errorHandler(err, req, res, next) {
      if (err.isEmpty()) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(err.code).json({ errors: err });
      }
    }

    return { logErrors, errorHandler };
  })();

  return {
    ifValidatedGoToService,
    sanitizeAndValidate,
    error,
  };
}
