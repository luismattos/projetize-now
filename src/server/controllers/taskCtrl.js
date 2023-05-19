import taskServices from "../services/taskServices.js";

const taskCtrl = TaskCtrl();
export default taskCtrl;

function TaskCtrl() {
  const list = async (req, res) => {
    // TODO: Implementar a lógica para listar as tarefas
  };

  const get = async (req, res) => {
    // TODO: Implementar a lógica para obter uma tarefa específica
  };

  const create = async (req, res) => {
    // TODO: Implementar a lógica para criar uma nova tarefa
  };

  const update = async (req, res) => {
    // TODO: Implementar a lógica para atualizar uma tarefa existente
  };

  const destroy = async (req, res) => {
    // TODO: Implementar a lógica para excluir uma tarefa existente
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
