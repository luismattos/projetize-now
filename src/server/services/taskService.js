import Task from "../../database/models/taskModel.js";
import ServiceResponse from "../../utils/serviceResponse.js";

const taskService = Service();
export default taskService;

function Service() {
  async function list() {
    try {
      const query = Task.find();
      const tasks = await query.exec();

      if (!tasks) {
        return new ServiceResponse(
          false,
          404,
          null,
          new Error("Nenhuma task encontrada.")
        );
      }

      return new ServiceResponse(true, 200, tasks, null);
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro interno do servidor.")
      );
    }
  }

  async function read(id) {
    try {
      const query = Task.findById(id);
      const task = await query.exec();

      if (!task) {
        return new ServiceResponse(
          false,
          404,
          null,
          new Error("Task não encontrado.")
        );
      }

      return new ServiceResponse(true, 200, task, null);
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao buscar task.")
      );
    }
  }

  async function create({
    title,
    description,
    startDate,
    endDate,
    priority,
    status,
    projectId,
  }) {
    const task = new Task({
      title,
      description,
      startDate,
      endDate,
      priority,
      status,
      projectId,
    });

    try {
      await task.validate();
    } catch (error) {
      return new ServiceResponse(
        false,
        422,
        null,
        new Error("Erro ao validar a task.")
      );
    }

    try {
      await task.save();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao realizar a criação da task.")
      );
    }

    return new ServiceResponse(true, 201, task, null);
  }

  async function update(
    id,
    { title, description, startDate, endDate, priority, status }
  ) {
    try {
      const query = Task.findById(id);
      const task = await query.exec();

      if (!task) {
        return new ServiceResponse(
          false,
          404,
          null,
          new Error("Task não encontrada.")
        );
      }

      task.title = title ?? task.title;
      task.description = description ?? task.description;
      task.startDate = startDate ?? task.startDate;
      task.endDate = endDate ?? task.endDate;
      task.priority = priority ?? task.priority;
      task.status = status ?? task.status;

      try {
        await task.validate();
      } catch (error) {
        return new ServiceResponse(
          false,
          400,
          null,
          new Error("Erro ao validar a task.")
        );
      }

      try {
        await task.save();
      } catch (error) {
        return new ServiceResponse(
          false,
          500,
          null,
          new Error("Erro ao realizar a atualização da task.")
        );
      }

      return new ServiceResponse(true, 200, task, null);
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao buscar a task.")
      );
    }
  }

  async function destroy(id) {
    try {
      const query = Task.findByIdAndDelete(id);
      const task = await query.exec();

      if (!task) {
        return new ServiceResponse(
          false,
          404,
          null,
          new Error("Task não encontrada.")
        );
      }

      return new ServiceResponse(true, 204, task, null);
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao excluir a task.")
      );
    }
  }

  return { list, read, create, update, destroy };
}
