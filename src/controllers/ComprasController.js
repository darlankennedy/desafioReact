const Compras = require("../models/Compras");

module.exports = {
  async create(req, res) {
    const { total, tipo_pagamento, status } = req.body;
    if (!total && tipo_pagamento && status) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    const compras = {
      total: req.body.total,
      tipo_pagamento: req.body.tipo_pagamento,
      status: req.body.status,
    };
    await Compras.create(compras)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Compras.",
        });
      });
  },

  async findAll(req, res) {
    await Compras.findAll()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Compras.",
        });
      });
  },

  async findByPk(req, res) {
    const id = req.params.id;

    const compras = await Compras.findByPk(id);

    return res.json(compras);
  },

  async update(req, res) {
    const id = req.params.id;
    console.log(id);
    const { total, tipo_pagamento, status } = req.body;
    if (!total && tipo_pagamento && status) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const compras = {
      total: req.body.total,
      tipo_pagamento: req.body.tipo_pagamento,
      status: req.body.status,
    };
    await Compras.update(compras, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Compra was updated successfully.",
          });
        } else {
          res.send({
            message: `Não é possível atualizar Compra com id=${id}. Talvez Compra não foi encontrado ou req.body está vazio!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Erro ao atualizar o Produtos com id=" + id,
        });
      });
  },

  async delete(req, res) {
    const id = req.params.id;

    await Compras.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Compras was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Produto with id=${id}. Maybe Compra was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Compra with id=" + id,
        });
      });
  },
};
