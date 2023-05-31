import Project from "../../database/models/projectModel.js";
import ServiceResponse from "../../utils/serviceResponse.js";

const projectService = Service();
export default projectService;

function Service() {
  async function list() {
    let projects;

    try {
      const query = Project.find();
      projects = await query.exec();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro interno do servidor.")
      );
    }

    if (!projects) {
      return new ServiceResponse(
        false,
        404,
        null,
        new Error("Nenhum projeto encontrado.")
      );
    }

    return new ServiceResponse(true, 200, projects, null);
  }

  async function read(id) {
    try {
      const query = Project.findById(id);
      const project = await query.exec();

      if (!project) {
        return new ServiceResponse(
          false,
          404,
          null,
          new Error("Projeto não encontrado.")
        );
      }

      return new ServiceResponse(true, 200, project, null);
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao buscar projeto.")
      );
    }
  }

  async function create({ name, description, startDate, endDate }) {
    const project = new Project({ name, description, startDate, endDate });

    try {
      await project.validate();
    } catch (error) {
      return new ServiceResponse(
        false,
        422,
        null,
        new Error("Erro ao validar o projeto.")
      );
    }

    try {
      await project.save();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao realizar a criação do projeto.")
      );
    }

    return new ServiceResponse(true, 201, project, null);
  }

  async function update(id, { name, description, startDate, endDate }) {
    let project;
    try {
      const query = Project.findById(id);
      project = await query.exec();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao buscar o projeto.")
      );
    }

    if (!project) {
      return new ServiceResponse(
        false,
        404,
        null,
        new Error("Projeto não encontrado.")
      );
    }

    if (name) {
      project.name = name;
    }
    if (description) {
      project.description = description;
    }
    if (startDate) {
      project.startDate = startDate;
    }
    if (endDate) {
      project.endDate = endDate;
    }

    try {
      await project.validate();
    } catch (error) {
      return new ServiceResponse(
        false,
        400,
        null,
        new Error("Erro ao validar o projeto.")
      );
    }

    try {
      await project.save();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao realizar a atualização do projeto.")
      );
    }

    return new ServiceResponse(true, 200, project, null);
  }

  async function destroy(id) {
    try {
      const query = Project.findByIdAndDelete(id);
      const project = await query.exec();

      if (!project) {
        return new ServiceResponse(
          false,
          404,
          null,
          new Error("Projeto não encontrado.")
        );
      }

      return new ServiceResponse(true, 204, project, null);
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao excluir o projeto.")
      );
    }
  }

  return { list, read, create, update, destroy };
}
