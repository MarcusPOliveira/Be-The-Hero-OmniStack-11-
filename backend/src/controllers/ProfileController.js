const connection = require("../database/connection");

module.exports = {
  //listar casos específicos de uma única ONG
  async index(req, res) {
    const ong_id = req.headers.authorization;
    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
};
