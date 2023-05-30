import inVals from "../../utils/inputValidators.js";
import middlewares from "../../utils/middlewares.js";
import userService from "../services/userService.js";
import teamMemberCtrl from "./teamMemberCtrl.js";

const userCtrl = Ctrl();
export default userCtrl;

// TODO enviar responses com codigos adequados, seja de erro ou de sucesso.

function Ctrl() {
  const service = userService;

  const list = async (req, res, next) => {
    try {
      const serviceResponse = await service.list();

      const { status, data, error } = serviceResponse;

      if (!serviceResponse.success) {
        return res.status(status).json({ error: error.message });
      }

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  };

  const read = async (req, res, next) => {
    try {
      const { id } = req.body;
      const serviceResponse = await service.get(id);

      const { status, data, error } = serviceResponse;

      if (!serviceResponse.success) {
        return res.status(status).json({ error: error.message });
      }

      return res.status(status).json(data);
    } catch (error) {
      next(error);
    }
  };

  const create = [
    ...inVals.user,
    middlewares.ifValidatedGoToService,

    async (req, res, next) => {
      try {
        const { name, email, password } = req.body;

        const serviceResponse = await service.create(name, email, password);

        if (!serviceResponse.success) {
          const { status, error } = serviceResponse;
          return res.status(status).json({ error: error.message });
        }

        const { status, data } = serviceResponse;
        return res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    },
  ];

  const update = [
    ...inVals.user,
    middlewares.ifValidatedGoToService,

    async (req, res, next) => {
      try {
        const { id, newName, newEmail, newPassword } = req.body;
        const serviceResponse = await service.update(
          id,
          newName,
          newEmail,
          newPassword
        );

        if (!serviceResponse.success) {
          const { status, error } = serviceResponse;
          return res.status(status).json({ error: error.message });
        }

        const { status, data } = serviceResponse;
        return res.status(status).json(data);
      } catch (error) {
        next(error);
      }
    },
  ];

  const destroy = async (req, res, next) => {
    const { id } = req.body;

    // TODO destroy
    // TODO ON DELETE CASCADE
  };

  return {
    list,
    read,
    create,
    update,
    destroy,
  };
}
