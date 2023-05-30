export default class ServiceResponse {
  /**
   *
   * @param {Boolean} success Indica se a operação foi bem-sucedida
   * @param {Number} status Código de status HTTP
   * @param {*} data Dados a serem enviados na resposta
   * @param {Error} error Erro ocorrido, se aplicável
   */
  constructor(success, status, data, error) {
    this.success = success;
    this.status = status;
    this.data = data;
    this.error = error;
  }
}
