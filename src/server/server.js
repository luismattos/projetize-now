import express from "express";
import helmet from "helmet";

import config from "../config.js";
import routes from "./routes/routes.js";
import middlewares from "../../utils/middlewares.js";

const { sanitizeAndValidate } = middlewares;

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

    const server = app.listen(port, () => logger.info(`Listening on ${url}!`));

    return server;
  }

  return { init };
}
