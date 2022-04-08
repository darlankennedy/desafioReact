const express = require("express");


const routes = express.Router();
const ProdutoController = require("./controllers/ProdutoController");
const ComprasController = require("./controllers/ComprasController");

//compras
routes.post("/compras", ComprasController.create);
routes.get("/compras", ComprasController.findAll);
routes.get("/compras/:id", ComprasController.findByPk);
routes.put("/compras/:id", ComprasController.update);
routes.delete("/compras/:id", ComprasController.delete);

//produtos
routes.post("/produto", ProdutoController.create);
routes.get("/produto", ProdutoController.findAll);
routes.get("/produto/:id", ProdutoController.findByPk);
routes.put("/produto/:id", ProdutoController.update);
routes.delete("/produto/:id", ProdutoController.delete);

module.exports = routes;
