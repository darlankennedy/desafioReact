
const Produto = require('../models/Produto');



module.exports = {

    async create(req, res) {
    const { nome, descricao, preco } = req.body;
        if (!nome && descricao && preco) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
         const produtos = {
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: req.body.preco
        };
       
    await  Produto.create(produtos)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Produtos."
      });
    });
    },

    async findAll(req, res) {
    await  Produto.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Produtos."
      });
    });
    },
    
    async findByPk(req, res) {
    const id = req.params.id;
   await Produto.findByPk(id)
        .then(data => {
      if (data) {
        res.json(data);
      } else {
      res.status(404).send({
          message: `Cannot find Produtos with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Produtos with id=" + id
      });
    });
    },

    async update(req, res) {
        
        const id = req.params.id;
        console.log(id)
       await Produto.update(req.body, {
            where: { id: id }
        })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produtos was updated successfully."
        });
      } else {
        res.send({
          message: `Não é possível atualizar Produtos com id=${id}. Talvez Tutorial não foi encontrado ou req.body está vazio!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao atualizar o Produtos com id=" + id
      });
    });
    },


    async delete(req, res) {
     const id = req.params.id;

     await  Produto.destroy({
       where: { id: id }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produto was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Produto with id=${id}. Maybe Produto was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Produto with id=" + id
      });
    });
    }

}