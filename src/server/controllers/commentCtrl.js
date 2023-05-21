import commentServices from "../services/commentServices.js";

const commentCtrl = CommentCtrl();
export default commentCtrl;

function CommentCtrl() {
  const list = async (req, res) => {
    // TODO
  };

  const get = async (req, res) => {
    // TODO
  };

  const create = async (req, res) => {
    // TODO
  };

  const update = async (req, res) => {
    // TODO
  };

  const destroy = async (req, res) => {
    // TODO
  };

  return {
    list,
    get,
    create,
    update,
    destroy,
  };
}
