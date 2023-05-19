import DB from "./database/db.js";
import server from "./server/server.js";

startApp();

function startApp() {
  DB.connect().then(() => server.init());
}
