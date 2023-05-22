import express from "express";
import helmet from "helmet";

import config from "../config.js";
import routes from "./routes/routes.js";
import middlewares from "../utils/middlewares.js";

const { sanitizeAndValidate, error } = middlewares;

const server = Server();
export default server;

function Server() {
  function init() {
    const app = express();
    const port = config.server.port;
    const url = config.server.url;

    app.use(helmet());

    app.use(express.json());

    app.use(sanitizeAndValidate);

    app.use(routes);

    app.use(error.logErrors);

    app.use(error.errorHandler);

    const server = app.listen(port, () => console.info(`Listening on ${url}!`));

    return server;
  }

  return { init };
}
