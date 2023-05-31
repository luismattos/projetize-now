import mongoose from "mongoose";
import TeamMember from "../../database/models/teamMemberModel";
import ServiceResponse from "../../utils/serviceResponse";

const teamMemberService = Service();
export default teamMemberService;

function Service() {
  async function IsTheUserAlreadyInTheProject(userId, projectId) {
    let tms;

    const query = TeamMember.find({ user: userId, project: projectId });
    tms = await query.exec();

    if (!tms) {
      return false;
    }
    return true;
  }

  async function list() {
    let tms;

    try {
      const query = TeamMember.find();
      tms = await query.exec();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro interno do servidor.")
      );
    }

    if (!tms) {
      return new ServiceResponse(
        false,
        404,
        null,
        new Error("Nenhum teamMember encontrado.")
      );
    }

    return new ServiceResponse(true, 200, tms, null);
  }

  async function read(id) {
    let tm;

    try {
      const query = TeamMember.findById(id);
      tm = await query.exec();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro interno do servidor.")
      );
    }

    if (!tm) {
      return new ServiceResponse(
        false,
        404,
        null,
        new Error("Nenhum teamMember encontrado.")
      );
    }

    return new ServiceResponse(true, 200, tm, null);
  }

  async function create(userId, projectId, isOwner, role) {
    if (await IsTheUserAlreadyInTheProject(userId, projectId)) {
      return new ServiceResponse(
        false,
        409,
        null,
        new Error("Team Member já cadastrado.")
      );
    }

    const tm = new TeamMember({
      user: userId,
      project: projectId,
      isOwner: isOwner,
      role: role,
    });

    try {
      await tm.validate();
    } catch (error) {
      return new ServiceResponse(
        false,
        422,
        null,
        new Error("Erro ao validar o TeamMember.")
      );
    }

    try {
      await tm.save();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao realizar a criação do TeamMember.")
      );
    }

    return new ServiceResponse(true, 201, tm, null);
  }

  async function update(id, isOwner, role) {
    let tm;

    try {
      const query = TeamMember.findById(id);
      tm = await query.exec();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao buscar o Team Member.")
      );
    }

    if (!tm) {
      return new ServiceResponse(
        false,
        404,
        null,
        new Error("Team Member não encontrado.")
      );
    }

    tm.isOwner = isOwner;
    tm.role = role;

    try {
      await tm.validate();
    } catch (error) {
      return new ServiceResponse(
        false,
        400,
        null,
        new Error("Erro ao validar o Team Member.")
      );
    }

    try {
      await tm.save();
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao realizar a atualização do Team Member")
      );
    }

    return new ServiceResponse(true, 200, tm, null);
  }

  async function destroy(id) {
    // TODO TeamMember.findAndDelete
    try {
      const query = TeamMember.findByIdAndDelete(id);
      const tm = await query.exec();

      if (!tm) {
        return new ServiceResponse(
          false,
          404,
          null,
          new Error("Team Member não encontrado.")
        );
      }

      return new ServiceResponse(true, 204, tm, null);
    } catch (error) {
      return new ServiceResponse(
        false,
        500,
        null,
        new Error("Erro ao excluir o Team Member.")
      );
    }
  }

  return { list, read, create, update, destroy };
}
