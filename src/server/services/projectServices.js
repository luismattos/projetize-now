import Project from "../../database/models/projectModel.js";

const projectServices = ProjectServices();
export default projectServices;

function ProjectServices() {
  const list = async () => {
    // TODO: Obter todos os projetos
  };

  const get = async (projectId) => {
    // TODO: Obter um projeto específico pelo ID
  };

  const create = async (projectData) => {
    // TODO: Criar um novo projeto com os dados fornecidos
  };

  const update = async (projectId, projectData) => {
    // TODO: Atualizar um projeto existente pelo ID com os dados fornecidos
  };

  const destroy = async (projectId) => {
    // TODO: Remover um projeto existente pelo ID
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
