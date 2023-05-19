import commentServices from "../services/commentServices.js";

const commentCtrl = CommentCtrl();
export default commentCtrl;

function CommentCtrl() {
  const list = async (req, res) => {
    // TODO: Implementar a lógica para listar os comentários
  };

  const get = async (req, res) => {
    // TODO: Implementar a lógica para obter um comentário específico
  };

  const create = async (req, res) => {
    // TODO: Implementar a lógica para criar um novo comentário
  };

  const update = async (req, res) => {
    // TODO: Implementar a lógica para atualizar um comentário existente
  };

  const destroy = async (req, res) => {
    // TODO: Implementar a lógica para excluir um comentário existente
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
