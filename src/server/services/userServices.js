import User from "../../database/models/userModel.js";

const userServices = UserServices();
export default userServices;

function UserServices() {
  const list = async () => {
    //TODO
  };

  const get = async (userId) => {
    //TODO
  };

  const create = async (userData) => {
    //TODO
  };

  const update = async (userId, userData) => {
    //TODO
  };

  const destroy = async (userId) => {
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
