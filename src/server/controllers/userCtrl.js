import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import userService from "../services/userService.js";

const userCtrl = Ctrl();
export default userCtrl;

// TODO enviar responses com codigos adequados, seja de erro ou de sucesso.

function Ctrl() {
  const service = userService;

  const list = async (req, res, next) => {
    return [
      async (req, res, next) => {
        const users = await service.list();
      },
    ];
  };

  const get = async (req, res, next) => {
    return [
      async (req, res, next) => {
        const { id } = req.body;
        const user = await service.get(id);
      },
    ];
  };

  const create = async (req, res, next) => {
    return [
      ...inVals.user,
      ...middlewares.user,
      async (req, res, next) => {
        const { name, email, password } = req.body;
        const newUser = await service.create(name, email, password);
      },
    ];
  };

  const update = async (req, res, next) => {
    return [
      ...inVals.user,
      ...middlewares.user,
      async (req, res, next) => {
        const { id, newName, newEmail, newPassword } = req.body;
        const updatedUser = await service.update(
          id,
          newName,
          newEmail,
          newPassword
        );
      },
    ];
  };

  const destroy = async (req, res, next) => {
    const { id } = req.body;

    return [
      async (req, res, next) => {
        const { id } = req.body;
        const destroyedUser = await service.destroy(id);
        // TODO ON DELETE CASCADE
      },
    ];
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
