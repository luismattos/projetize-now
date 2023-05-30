import User from "../../database/models/userModel.js";
import ServiceResponse from "../../utils/serviceResponse.js";

const { ServiceError } = customErrors;

const userService = Service();
export default userService;

function Service() {
  async function isTheEmailAlreadyRegistered(email) {
    const query = User.where("email").equals(email);
    const user = await query.exec();
    if (user) {
      return true;
    }
    return false;
  }

  async function list() {
    let users;
    try {
      const query = User.find();
      users = await query.exec();
    } catch (error) {
      new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro interno do servidor.")
      );
    }

    if (!users) {
      new ServiceResponse(
        false,
        404,
        null,
        new Error("Nenhum usuário encontrado.")
      );
    }

    new ServiceResponse(true, 200, users, null);
  }

  async function read(id) {
    let user;

    try {
      const query = User.findById(id);
      user = await query.exec();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao buscar usuário.")
      );
    }
    if (!user) {
      return new ServiceResponse(
        false,
        404,
        null,
        new Error("Usuário não encontrado.")
      );
    }

    return new ServiceResponse(true, 200, user, null);
  }

  async function create(name, email, password) {
    if (isTheEmailAlreadyRegistered(email)) {
      return new ServiceResponse(
        false,
        409,
        null,
        new Error("Email já cadastrado.")
      );
    }
    let newUser;

    newUser = new User({ name, email, password });

    try {
      await newUser.validate();
    } catch (error) {
      return new ServiceResponse(
        false,
        422,
        null,
        new Error("Erro ao validar o usuário.")
      );
    }

    try {
      await newUser.save();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao realizar a criação.")
      );
    }

    return new ServiceResponse(true, 201, newUser, null);
  }

  async function update(id, newName, newEmail, newPassword) {
    let user;

    try {
      const query = User.findById(id);
      user = await query.exec();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao buscar o usuário.")
      );
    }

    if (!user) {
      return new ServiceResponse(
        false,
        404,
        null,
        new Error("Usuário não encontrado.")
      );
    }

    if (isTheEmailAlreadyRegistered(newEmail)) {
      return new ServiceResponse(
        false,
        409,
        null,
        new Error("User not updated: Email already registered.")
      );
    }

    if (newName) {
      user.name = newName;
    }
    if (newEmail) {
      user.email = newEmail;
    }
    if (newPassword) {
      user.password = newPassword;
    }

    try {
      await user.validate();
    } catch (error) {
      return new ServiceResponse(
        false,
        400,
        null,
        new Error("Erro ao validar o usuário.")
      );
    }
    try {
      await user.save();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao realizar a atualização.")
      );
    }

    return new ServiceResponse(true, 200, user, null);
  }

  async function destroy(id) {
    try {
      const query = User.findByIdAndDelete(id);
      const user = await query.exec();

      if (!user) {
        return new ServiceResponse(
          false,
          404,
          null,
          new Error("Usuário não encontrado.")
        );
      }

      return new ServiceResponse(true, 204, user, null);
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao excluir o usuário.")
      );
    }
  }

  return { list, read, create, update, destroy };
}
