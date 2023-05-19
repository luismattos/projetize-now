import express from "express";

import config from "../config.js";
import routes from "./routes/routes.js";

const server = Server();
export default server;

function Server() {
  function init() {
    const app = express();
    const port = config.server.port;
    const url = config.server.url;

    app.use(express.json());

    app.use("/", routes);

    const server = app.listen(port, () => logger.info(`Listening on ${url}!`));

    return server;
  }

  return { init };
}
