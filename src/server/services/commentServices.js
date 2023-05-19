import Comment from "../../database/models/commentModel.js";

const commentServices = CommentServices();
export default commentServices;

function CommentServices() {
  const list = async () => {
    // TODO: Obter todos os comentários
  };

  const get = async (commentId) => {
    // TODO: Obter um comentário específico pelo ID
  };

  const create = async (commentData) => {
    // TODO: Criar um novo comentário com os dados fornecidos
  };

  const update = async (commentId, commentData) => {
    // TODO: Atualizar um comentário existente pelo ID com os dados fornecidos
  };

  const destroy = async (commentId) => {
    // TODO: Remover um comentário existente pelo ID
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
