import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import teamMemberService from "../services/teamMemberService.js";

const teamMemberCtrl = Ctrl();
export default teamMemberCtrl;

function Ctrl() {
  const service = teamMemberService;

  const list = async (req, res, next) => {
    return [service.list];
  };

  const get = async (req, res, next) => {
    return [service.get];
  };

  const create = async (req, res, next) => {
    return [...inVals.teamMember, ...middlewares.teamMember, service.create];
  };

  const update = async (req, res, next) => {
    return [...inVals.teamMember, ...middlewares.teamMember, service.update];
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
