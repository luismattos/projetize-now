import projectServices from "../services/projectServices.js";

const projectCtrl = ProjectCtrl();
export default projectCtrl;

function ProjectCtrl() {
  const list = async (req, res) => {
    // TODO: Implementar a lógica para listar os projetos
  };

  const get = async (req, res) => {
    // TODO: Implementar a lógica para obter um projeto específico
  };

  const create = async (req, res) => {
    // TODO: Implementar a lógica para criar um novo projeto
  };

  const update = async (req, res) => {
    // TODO: Implementar a lógica para atualizar um projeto existente
  };

  const destroy = async (req, res) => {
    // TODO: Implementar a lógica para excluir um projeto existente
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
