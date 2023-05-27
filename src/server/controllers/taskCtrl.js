import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import taskService from "../services/taskService.js";

const taskCtrl = Ctrl();
export default taskCtrl;

function Ctrl() {
  const service = taskService;

  const list = async (req, res, next) => {
    return [service.list];
  };

  const get = async (req, res, next) => {
    return [service.get];
  };

  const create = async (req, res, next) => {
    return [...inVals.task, ...middlewares.task, service.create];
  };

  const update = async (req, res, next) => {
    return [...inVals.task, ...middlewares.task, service.update];
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
