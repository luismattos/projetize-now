import User from "../../database/models/userModel.js";

const userService = Service();
export default userService;

// TODO retorna objetos ou erro

function Service() {
  async function list() {
    const users = await User.find().exec();
    return users;
  }

  async function get(id) {
    const user = await User.findById(id).exec();
    return user;
  }

  async function create(name, email, password) {
    const user = await User.create({ name, email, password });
    return user;
  }

  async function update(id, newName, newEmail, newPassword) {}

  async function destroy(id) {}

  return { list, get, create, update, destroy };
}
