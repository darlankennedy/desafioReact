const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Produtos = require("./../models/Produto");
const Compras = require("./../models/Compras");
const ItemsCompra = require("./../models/ItemCompra");

const connection = new Sequelize(dbConfig);

Produtos.init(connection);
Compras.init(connection);
ItemsCompra.init(connection);

Produtos.associate(connection.models);
Compras.associate(connection.models);
ItemsCompra.associate(connection.models);

module.exports = connection;
