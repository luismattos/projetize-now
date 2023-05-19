import Task from "../../database/models/taskModel.js";

const taskServices = TaskServices();
export default taskServices;

function TaskServices() {
  const list = async () => {
    // TODO: Obter todas as tarefas
  };

  const get = async (taskId) => {
    // TODO: Obter uma tarefa específica pelo ID
  };

  const create = async (taskData) => {
    // TODO: Criar uma nova tarefa com os dados fornecidos
  };

  const update = async (taskId, taskData) => {
    // TODO: Atualizar uma tarefa existente pelo ID com os dados fornecidos
  };

  const destroy = async (taskId) => {
    // TODO: Remover uma tarefa existente pelo ID
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
