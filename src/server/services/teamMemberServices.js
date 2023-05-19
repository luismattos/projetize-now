import TeamMember from "../../database/models/teamMemberModel.js";

const teamMemberServices = TeamMemberServices();
export default teamMemberServices;

function TeamMemberServices() {
  const list = async () => {
    // TODO: Obter todos os membros da equipe
  };

  const get = async (teamMemberId) => {
    // TODO: Obter um membro da equipe específico pelo ID
  };

  const create = async (teamMemberData) => {
    // TODO: Criar um novo membro da equipe com os dados fornecidos
  };

  const update = async (teamMemberId, teamMemberData) => {
    // TODO: Atualizar um membro da equipe existente pelo ID com os dados fornecidos
  };

  const destroy = async (teamMemberId) => {
    // TODO: Remover um membro da equipe existente pelo ID
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
