import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import projectService from "../services/projectService.js";

const projectCtrl = Ctrl();
export default projectCtrl;

function Ctrl() {
  const service = projectService;

  const list = async (req, res, next) => {
    return [service.list];
  };

  const get = async (req, res, next) => {
    return [service.get];
  };

  const create = async (req, res, next) => {
    return [...inVals.project, ...middlewares.project, service.create];
  };

  const update = async (req, res, next) => {
    return [...inVals.project, ...middlewares.project, service.update];
  };

  const destroy = async (req, res, next) => {
    // TODO on delete cascade
    return [service.destroy];
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
