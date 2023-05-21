import { Router } from "express";

import commentRoutes from "./commentRoutes.js";
import projectRoutes from "./projectRoutes.js";
import taskRoutes from "./taskRoutes.js";
import teamMemberRoutes from "./teamMemberRoutes.js";
import userRoutes from "./userRoutes.js";


const routes = Routes();
export default routes;

function Routes() {
  const router = Router();

  router.use("/comments", commentRoutes);
  router.use("/projects", projectRoutes);
  router.use("/tasks", taskRoutes);
  router.use("/team-members", teamMemberRoutes);
  router.use("/users", userRoutes);

  return router;
}
