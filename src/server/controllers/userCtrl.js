import userServices from "../services/userServices.js";

const userCtrl = UserCtrl();
export default userCtrl;

function UserCtrl() {
  const list = async (req, res) => {
    //TODO
  };

  const get = async (req, res) => {
    //TODO
  };

  const create = async (req, res) => {
    //TODO
  };

  const update = async (req, res) => {
    //TODO
  };

  const destroy = async (req, res) => {
    //TODO
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
